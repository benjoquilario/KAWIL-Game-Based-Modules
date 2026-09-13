K.A.W.I.L. Game-Based Modules — FINAL v12

MAHAHALAGANG PAGBABAGO
- Mas malinaw ang character assets; naka-2x resolution at mild sharpening.
- Sa unang pahina:
  * Pangalan (Buong Pangalan) — Hal. Juan Miguel Dela Cruz
  * Baitang at Seksyon — Hal. 7-BLUEBELL
  * ARAL Tutee No. — awtomatikong ibinibigay; read-only
- Kapag central record backend ay nakakonekta:
  * Unang bagong learner = 01, kasunod = 02, 03 ... 99, 100, 101, atbp.
  * Parehong buong pangalan + baitang/seksyon = parehong ARAL Tutee No.
  * Bawat module trial ay awtomatikong naipapadala sa private Google Sheet ng researcher.
  * Kapag pansamantalang offline, nananatili ang local copy at naka-queue ang sync hanggang bumalik ang internet.
- Inalis ang participant-facing CSV/JSON download buttons.
- Pagkatapos ma-master ang Modyul 5, may permanenteng “Ang Aking Resulta” button sa Mapa ng Paglalakbay.
- Kapag umulit ng module, nadadagdag ang bagong trial; hindi nabubura ang naunang trial.

PARA SA CENTRAL RECORD / ARAL TUTEE NUMBER
1. Gumawa ng blank Google Sheet para sa K.A.W.I.L. records.
2. Sa Google Sheet: Extensions > Apps Script.
3. I-paste ang laman ng google-apps-script.gs.
4. Kopyahin ang Google Sheet ID mula sa URL at ilagay sa SPREADSHEET_ID sa Apps Script.
5. Deploy > New deployment > Web app.
   Execute as: Me
   Who has access: Anyone
6. Kopyahin ang Web App URL na nagtatapos sa /exec.
7. Buksan ang config.js at ilagay ang URL sa apiUrl.
   Halimbawa: apiUrl: "https://script.google.com/macros/s/XXXXX/exec"
8. I-upload/redeploy ang buong website folder sa Netlify.

MGA SHEET NA AWTOMATIKONG MALILIKHA
- Participants: ARAL Tutee No., Buong Pangalan, Baitang at Seksyon, Created At, Last Seen
- Trials: ARAL Tutee No., Pangalan, Seksyon, Modyul, Trial, Score, Total, Percent, Active Time, Oral Reading Time, Finished At, Page Times JSON, Received At

IMPORTANT
Kung blanko ang apiUrl sa config.js, test/local mode lamang ang automatic number at hindi ito globally sequential sa iba’t ibang device. Para maging tunay na 01, 02, 03... sa lahat ng gumagamit at para mapunta sa researcher ang records, kailangang i-deploy ang Google Apps Script backend.

FINAL v15 MEDIA-READY UPDATE
- May dalawang story controls na sa Modyul 1–5: ▶ Pakinggan at 🎬 Panoorin.
- Ang Panoorin button ay handa na para sa MP4 files sa /video folder.
- Habang wala pang MP4, magpapakita ito ng “Malapit nang maging available...” na placeholder.
- Walang binago sa stories, questions, scoring/mastery, trial/timing records, registration, o Google Sheets backend logic.


FINAL v15 DRAFT MEDIA UPDATE:
- Pakinggan now shows a polished placeholder when MP3 narration is not yet available; browser TTS fallback removed.
- Panoorin remains available for all five modules.
- Module 1 includes the selected Short-format NotebookLM video; Modules 2–5 remain media-ready placeholders until their MP4 files are added.
