/**
 * K.A.W.I.L. Game-Based Modules — Google Sheets record backend
 *
 * SETUP:
 * 1) Gumawa ng blank Google Sheet para sa K.A.W.I.L. records.
 * 2) Extensions > Apps Script. I-paste ang buong file na ito.
 * 3) Palitan ang SPREADSHEET_ID sa ibaba ng ID ng Google Sheet.
 * 4) Deploy > New deployment > Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 5) Kopyahin ang URL na nagtatapos sa /exec at ilagay sa config.js bilang apiUrl.
 *
 * Ang Sheet mismo ay mananatiling private maliban kung ikaw ang mag-share nito.
 */
const SPREADSHEET_ID = 'ILAGAY_DITO_ANG_GOOGLE_SHEET_ID';
const PARTICIPANTS_SHEET = 'Participants';
const TRIALS_SHEET = 'Trials';

function doGet() {
  return json_({ ok: true, service: 'KAWIL Records', message: 'Online' });
}

function doPost(e) {
  try {
    const payload = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (payload.action === 'register') return json_(register_(payload));
    if (payload.action === 'saveAttempt') return json_(saveAttempt_(payload));
    return json_({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return json_({ ok: false, error: String(err && err.message ? err.message : err) });
  }
}

function openBook_() {
  if (!SPREADSHEET_ID || SPREADSHEET_ID.indexOf('ILAGAY_DITO') === 0) {
    throw new Error('Hindi pa nakalagay ang SPREADSHEET_ID sa Apps Script.');
  }
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function ensureSheet_(name, headers) {
  const ss = openBook_();
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, headers.length).setValues([headers]);
    sh.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

function norm_(s) {
  return String(s || '').trim().replace(/\s+/g, ' ').toLowerCase();
}

function formatNo_(n) {
  const v = Math.max(1, Number(n) || 1);
  return v < 10 ? '0' + v : String(v);
}

function register_(p) {
  const fullName = String(p.name || '').trim().replace(/\s+/g, ' ');
  const section = String(p.section || '').trim().replace(/\s+/g, ' ');
  if (!fullName || !section) return { ok: false, error: 'Kulang ang buong pangalan o baitang/seksyon.' };

  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const sh = ensureSheet_(PARTICIPANTS_SHEET, ['ARAL Tutee No.', 'Buong Pangalan', 'Baitang at Seksyon', 'Created At', 'Last Seen']);
    const rows = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 5).getValues() : [];
    const nn = norm_(fullName), ns = norm_(section);
    for (let i = 0; i < rows.length; i++) {
      if (norm_(rows[i][1]) === nn && norm_(rows[i][2]) === ns) {
        const no = String(rows[i][0]);
        sh.getRange(i + 2, 5).setValue(new Date());
        return { ok: true, tuteeNo: no, existing: true };
      }
    }
    let maxNo = 0;
    rows.forEach(r => {
      const n = parseInt(String(r[0]).replace(/\D/g, ''), 10);
      if (Number.isFinite(n)) maxNo = Math.max(maxNo, n);
    });
    const no = formatNo_(maxNo + 1);
    sh.appendRow([no, fullName, section, new Date(), new Date()]);
    return { ok: true, tuteeNo: no, existing: false };
  } finally {
    lock.releaseLock();
  }
}

function saveAttempt_(p) {
  const participant = p.participant || {};
  const attempt = p.attempt || {};
  if (!participant.number || !participant.name || !participant.section) {
    return { ok: false, error: 'Walang kumpletong participant record.' };
  }
  const sh = ensureSheet_(TRIALS_SHEET, [
    'ARAL Tutee No.', 'Buong Pangalan', 'Baitang at Seksyon', 'Modyul', 'Trial',
    'Score', 'Total', 'Percent', 'Kabuuang Active Time (sec)', 'Timed Oral Reading (sec)',
    'Finished At', 'Page Times (JSON)', 'Received At'
  ]);
  sh.appendRow([
    participant.number, participant.name, participant.section,
    Number(p.moduleNo || 0), Number(attempt.trial || 0), Number(attempt.score || 0), Number(attempt.total || 0), Number(attempt.pct || 0),
    Math.round(Number(attempt.totalMs || 0) / 1000), attempt.readingSeconds || '', attempt.finishedAt || '',
    JSON.stringify(attempt.pageTimes || {}), new Date()
  ]);
  return { ok: true };
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
