const MASTERY_PERCENT = 80;

const module1Questions = [
  {
    q:"Batay sa pangungusap na ‘Dahil sa kaniyang pag-uusisa, agad niya itong ipinakita sa kaniyang guro,’ ano ang pinakamalapit na kahulugan ng salitang pag-uusisa?",
    choices:[
      {t:"pagdududa sa nakita",ok:false},{t:"pagnanais na malaman o matuklasan ang isang bagay",ok:true},{t:"pag-aalala sa maaaring mangyari",ok:false},{t:"pagmamadaling matapos ang isang gawain",ok:false}
    ]
  },
  {
    q:"Sa kuwento, may maliit na papel sa ilalim ng kahon na nagbigay ng pahiwatig tungkol sa nawawalang aklat. Ano ang gamit ng pahiwatig sa bahaging ito?",
    choices:[
      {t:"nagbibigay ng direksiyon o clue upang may matuklasan",ok:true},{t:"nagbibigay ng buong kasaysayan ng aklat",ok:false},{t:"nagpapaliwanag kung sino ang may-ari ng kahon",ok:false},{t:"nagsasaad ng tuntunin sa paggamit ng silid-aklatan",ok:false}
    ]
  },
  {
    q:"Naging masigasig si Mika sa paghahanap. Alin ang pinakamalapit na kahulugan ng masigasig ayon sa kaniyang ginawa?",
    choices:[
      {t:"maingat at mabagal sa bawat kilos",ok:false},{t:"masikap at pursigidong ginagawa ang gawain",ok:true},{t:"mapanuri at maraming itinatanong",ok:false},{t:"mahinahon at tahimik na naghihintay",ok:false}
    ]
  },
  {
    q:"Alin ang wastong pagkakahati sa pantig ng salitang ‘pahiwatig’?",
    choices:[
      {t:"pa-hi-wa-tig",ok:true},{t:"pa-hi-wat-ig",ok:false},{t:"pah-i-wa-tig",ok:false},{t:"pa-hiw-a-tig",ok:false}
    ]
  },
  {
    q:"Alin ang wastong paghahati sa pantig upang mabasa nang tama ang salitang ‘tagapangasiwa’?",
    choices:[
      {t:"ta-ga-pa-nga-si-wa",ok:true},{t:"ta-ga-pang-a-si-wa",ok:false},{t:"ta-ga-pa-ngas-i-wa",ok:false},{t:"ta-ga-pan-ga-si-wa",ok:false}
    ]
  },
  {
    q:"Aling salita sa kuwento ang nabubuo sa mga pantig na ka-ga-la-kan?",
    choices:[
      {t:"kagalakan",ok:true},{t:"kasaysayan",ok:false},{t:"kayamanan",ok:false},{t:"kandado",ok:false}
    ]
  },
  {
    q:"Aling salita ang pinakaangkop upang mabuo ang ideya mula sa kuwento: ‘Dahil sa kaniyang ________, nais ni Mika na malaman kung ano ang nasa lumang kahon.’?",
    choices:[
      {t:"kagalakan",ok:false},{t:"pag-uusisa",ok:true},{t:"pahiwatig",ok:false},{t:"kasaysayan",ok:false}
    ]
  },
  {
    q:"Aling kilos ni Mika ang pinakamalinaw na patunay na siya ay masigasig sa paghahanap?",
    choices:[
      {t:"Ipinakita niya agad sa guro ang lumang kahon.",ok:false},{t:"Isa-isa niyang tiningnan ang mga istante at inayos ang mga aklat.",ok:true},{t:"Binasa niya ang pangalan sa unang pahina ng aklat.",ok:false},{t:"Napangiti siya nang malaman ang kasaysayan ng aklat.",ok:false}
    ]
  },
  {
    q:"Sa wakas ng kuwento, ano ang tinutukoy ng salitang kagalakan na naramdaman ni Mika?",
    choices:[
      {t:"tuwa dahil may natuklasan siyang bahagi ng kasaysayan ng paaralan",ok:true},{t:"interes dahil may kandado ang lumang kahon",ok:false},{t:"pagkamangha dahil malaki ang diksyunaryo",ok:false},{t:"kasiyahan dahil naayos niya ang mga aklat sa istante",ok:false}
    ]
  },
  {
    q:"Aling pangungusap ang gumagamit ng salitang ‘pahiwatig’ sa paraang pinakamalapit sa gamit nito sa kuwento?",
    choices:[
      {t:"Nag-iwan ang guro ng pahiwatig upang matulungan silang mahanap ang nakatagong aklat.",ok:true},{t:"Isinulat ni Ana ang pahiwatig bilang pamagat ng kaniyang ulat.",ok:false},{t:"Inayos ni Leo ang pahiwatig kasama ng mga aklat sa estante.",ok:false},{t:"Binilang ni Mara ang pahiwatig bago isara ang silid-aklatan.",ok:false}
    ]
  },
  {
    q:"Aling sitwasyon ang pinakamalinaw na nagpapakita ng pagiging masigasig?",
    choices:[
      {t:"Paulit-ulit na sinuri ni Lino ang mga sanggunian hanggang makita niya ang impormasyong kailangan.",ok:true},{t:"Tiningnan ni Lino ang pamagat ng aklat bago ito ibalik sa estante.",ok:false},{t:"Itinanong ni Lino kung saan matatagpuan ang silid-aklatan.",ok:false},{t:"Binasa ni Lino ang isang pahina at isinara agad ang aklat.",ok:false}
    ]
  },
  {
    q:"Aling kilos ang pinakamahusay na halimbawa ng pag-uusisa?",
    choices:[
      {t:"Nagtanong si Carlo tungkol sa pinagmulan at kahulugan ng lumang larawan.",ok:true},{t:"Inayos ni Carlo ang mga larawan ayon sa laki.",ok:false},{t:"Isinulat ni Carlo ang petsa sa likod ng larawan.",ok:false},{t:"Ibinalik ni Carlo ang larawan sa dating kinalalagyan.",ok:false}
    ]
  }
];

const module2Questions = [{"q":"Habang binabasa ni Ana ang unang pangungusap, mabilis siyang nagsalita at halos walang paghinto. Ano ang pinakamainam niyang gawin upang maging malinaw ang diwa?","choices":[{"t":"Bagalan nang bahagya at hatiin ang pangungusap sa mga pariralang may buong diwa.","ok":1},{"t":"Panatilihin ang bilis ngunit lakasan ang boses sa dulo ng bawat pangungusap.","ok":false},{"t":"Huminto pagkatapos ng halos bawat salita upang marinig nang malinaw ang bawat tunog.","ok":false},{"t":"Ulitin ang unang salita ng bawat pangungusap bago ipagpatuloy ang pagbabasa.","ok":false}]},{"q":"Binasa ni Marco ang linyang “Sa tabi ng pasilyo, napansin niya ang tatlong kahong puno ng mga aklat.” Saan siya dapat sandaling huminto?","choices":[{"t":"Pagkatapos ng “pasilyo” dahil dito nagtatapos ang panimulang parirala.","ok":1},{"t":"Pagkatapos ng “napansin” dahil ito ang kilos na ginawa ng tauhan.","ok":false},{"t":"Pagkatapos ng “tatlong” dahil sinusundan ito ng bagay na binibilang.","ok":false},{"t":"Pagkatapos ng “puno” dahil dito inilalarawan ang laman ng mga kahon.","ok":false}]},{"q":"Si Bea ang nakatalagang bumasa ng tanong na “Para saan po ang mga aklat na ito?” Ano ang pinakamainam na paraan ng pagbigkas?","choices":[{"t":"Basahin nang malinaw at gumamit ng angkop na intonasyon na nagpapahiwatig ng pagtatanong.","ok":1},{"t":"Basahin sa iisang tono upang hindi mabago ang kahulugan ng mga salitang ginamit.","ok":false},{"t":"Lakasan ang bawat salita upang maipakitang mahalaga ang tanong sa kuwento.","ok":false},{"t":"Huminto sa bawat dalawang salita upang matiyak na mabagal ang kaniyang pagbasa.","ok":false}]},{"q":"Sa poster ay nakasulat ang “Kumuha, Magbasa, Magbalik.” Paano ito babasahin ni Leo upang malinaw ang tatlong hakbang?","choices":[{"t":"Magkaroon ng maikling paghinto sa bawat kuwit at malinaw na bigkasin ang bawat kilos.","ok":1},{"t":"Basahin ang tatlong salita nang tuloy-tuloy upang marinig bilang iisang utos.","ok":false},{"t":"Bigyang-diin lamang ang “Magbalik” dahil iyon ang pinakahuling hakbang.","ok":false},{"t":"Huminto nang matagal sa bawat kuwit upang maging mabagal ang buong pahayag.","ok":false}]},{"q":"Nahihirapan si Kim sa salitang “pakikipagtulungan.” Ano ang pinakamabisang estratehiya upang mabasa niya ito nang wasto?","choices":[{"t":"Hatiin muna sa makabuluhang pantig at saka basahin muli bilang isang buong salita.","ok":1},{"t":"Laktawan muna ang salita at hulaan ang kahulugan mula sa susunod na pangungusap.","ok":false},{"t":"Basahin lamang ang unang bahagi ng salita at ipagpalagay ang natitirang tunog.","ok":false},{"t":"Palitan ang salita ng mas maikling kasingkahulugan habang binabasa ang teksto.","ok":false}]},{"q":"Binasa ni Nica ang “Agad na tumulong si Lira,” ngunit nais niyang maipakita na hindi nag-atubili si Lira. Aling salita ang nararapat bigyang-diin?","choices":[{"t":"“Agad,” sapagkat ipinapakita nito kung gaano kabilis siyang kumilos.","ok":1},{"t":"“Tumulong,” sapagkat iyon ang pangunahing pandiwa sa pangungusap.","ok":false},{"t":"“Lira,” sapagkat siya ang tauhang nagsagawa ng kilos.","ok":false},{"t":"“Si,” sapagkat ito ang salitang nag-uugnay sa tauhan at sa kilos.","ok":false}]},{"q":"Apat na magkakaklase ang sabay-sabay na bumabasa ng pangungusap tungkol sa paghahati ng gawain. Ano ang pinakamainam nilang gawin upang hindi maputol ang diwa?","choices":[{"t":"Huminto sa mga kuwit at panatilihing magkakasama ang mga salitang bumubuo sa bawat gawain.","ok":1},{"t":"Magpalitan ng mambabasa pagkatapos ng bawat dalawang salita upang pantay ang bahagi.","ok":false},{"t":"Bilisan ang pagbasa sa gitna ng pangungusap at bumagal lamang sa huling gawain.","ok":false},{"t":"Huminto tuwing makakakita ng pandiwa kahit wala namang bantas sa bahaging iyon.","ok":false}]},{"q":"Napapansin ng guro na binabasa ni Jessa ang “munting / aklatan” na may mahabang pagitan. Ano ang mas angkop na pagsasanay?","choices":[{"t":"Basahin ang “munting aklatan” bilang isang natural na parirala bago isama sa buong pangungusap.","ok":1},{"t":"Ulit-ulitin ang “munting” nang mabilis bago basahin ang salitang “aklatan.”","ok":false},{"t":"Lakasan ang “aklatan” upang matakpan ang mahabang paghinto sa pagitan ng mga salita.","ok":false},{"t":"Pantigin nang paisa-isa ang dalawang salita sa tuwing makikita ang parirala sa teksto.","ok":false}]},{"q":"Pagkatapos ng timed reading, tinanong si Carlo kung ano ang unang pangyayaring nagbunsod sa proyekto. Aling detalye ang dapat niyang piliin?","choices":[{"t":"Napansin ni Lira ang mga kahong puno ng aklat sa tabi ng pasilyo.","ok":1},{"t":"Naglagay ang klase ng talaan para sa mga mag-aaral na hihiram.","ok":false},{"t":"Hinati ng mga mag-aaral ang gawain sa paglilinis at pag-aayos.","ok":false},{"t":"Natapos ang munting aklatan bago tumunog ang kampana para sa klase.","ok":false}]},{"q":"May bagong mag-aaral na nagtanong kung bakit ginawa ang munting aklatan sa pasilyo. Ano ang pinakatumpak na paliwanag batay sa teksto?","choices":[{"t":"Upang magkaroon ng madaling mapagkukunan ng babasahin ang mga mag-aaral habang naghihintay ng klase.","ok":1},{"t":"Upang mailipat sa pasilyo ang lahat ng aklat na hindi na kasya sa pangunahing silid-aklatan.","ok":false},{"t":"Upang magkaroon ng permanenteng lugar ang klase para sa kanilang mga pangkatang pagpupulong.","ok":false},{"t":"Upang maitago ang mga lumang aklat na hindi na ginagamit sa regular na mga asignatura.","ok":false}]},{"q":"Dalawang pangkat ang parehong gustong matapos agad ang pag-aayos. Aling ginawa ng klase sa teksto ang pinakamainam nilang tularan?","choices":[{"t":"Hatiin ang mga gawain at magtulungan upang sabay-sabay na matapos ang magkakaibang bahagi.","ok":1},{"t":"Unahin lamang ang pinakamadaling gawain at ipagpaliban ang iba hanggang sa susunod na araw.","ok":false},{"t":"Ibigay sa iisang mag-aaral ang pagdedesisyon at hintayin ang kaniyang utos sa bawat hakbang.","ok":false},{"t":"Gawin muna nang paisa-isa ang bawat gawain upang walang dalawang pangkat na kumilos nang sabay.","ok":false}]},{"q":"Sa ikalawang pagbasa, tama ang lahat ng salita ni Luis ngunit napakabilis at hindi malinaw ang mga parirala. Ano ang pinakamainam niyang baguhin?","choices":[{"t":"Gumamit ng katamtamang bilis, malinaw na bigkas, at natural na paghinto ayon sa diwa.","ok":1},{"t":"Panatilihin ang bilis at dagdagan lamang ang lakas ng boses sa mahahalagang salita.","ok":false},{"t":"Bumagal sa lahat ng salita at huminto pagkatapos ng bawat isa upang maiwasan ang pagkakamali.","ok":false},{"t":"Ulitin ang bawat pangungusap nang dalawang beses kahit tama na ang unang pagbasa niya.","ok":false}]}];

const module3Questions = [
  {
    q:"Kailan nagtipon ang mga mag-aaral ng Baitang 7-Mabini para ayusin ang gulayan?",
    choices:[
      {t:"Noong Martes ng umaga bago bumalik sa kanilang klase",ok:true},
      {t:"Noong Lunes ng hapon pagkatapos ng kanilang klase",ok:false},
      {t:"Noong Miyerkules ng umaga bago ang unang asignatura",ok:false},
      {t:"Noong Biyernes ng hapon matapos ang huling asignatura",ok:false}
    ]
  },
  {
    q:"Saan matatagpuan ang maliit na gulayan na inayos ng klase?",
    choices:[
      {t:"Sa likod ng kanilang silid-aralan",ok:true},
      {t:"Sa harap ng kanilang silid-aralan",ok:false},
      {t:"Sa tabi ng pangunahing silid-aklatan",ok:false},
      {t:"Sa gilid ng covered court ng paaralan",ok:false}
    ]
  },
  {
    q:"Aling tatlong uri ng punla ang dala ng pangkat ayon sa teksto?",
    choices:[
      {t:"Pechay, kamatis, at talong",ok:true},
      {t:"Pechay, sitaw, at kalabasa",ok:false},
      {t:"Kamatis, okra, at talong",ok:false},
      {t:"Talong, mustasa, at sili",ok:false}
    ]
  },
  {
    q:"Sa ilang pangkat hinati ni Gng. Ramos ang buong klase bago sila magsimula?",
    choices:[
      {t:"Sa apat na pangkat na may magkakaibang gawain",ok:true},
      {t:"Sa tatlong pangkat na may magkakaibang gawain",ok:false},
      {t:"Sa limang pangkat na may magkakaibang gawain",ok:false},
      {t:"Sa anim na pangkat na may magkakaibang gawain",ok:false}
    ]
  },
  {
    q:"Ano ang pangunahing gawain ng unang pangkat?",
    choices:[
      {t:"Naglinis ng lupa at nag-alis ng tuyong dahon",ok:true},
      {t:"Gumawa ng mga tudling at inayos ang mga hanay",ok:false},
      {t:"Nagtanim ng mga punla at inayos ang pagitan",ok:false},
      {t:"Naghanda ng mga karatula at pangalan ng halaman",ok:false}
    ]
  },
  {
    q:"Ano ang ginawa ng ikalawang pangkat ayon sa pagkakahati ng gawain?",
    choices:[
      {t:"Gumawa sila ng mga tudling para sa mga halaman",ok:true},
      {t:"Naglinis sila ng lupa at nag-alis ng dahon",ok:false},
      {t:"Nagtanim sila ng mga punla sa bawat hanay",ok:false},
      {t:"Nagsulat sila ng mga pangalan sa mga karatula",ok:false}
    ]
  },
  {
    q:"Ano ang inihanda ng ikaapat na pangkat para sa gulayan?",
    choices:[
      {t:"Mga karatulang may pangalan ng bawat halaman",ok:true},
      {t:"Mga talaang may pangalan ng bawat mag-aaral",ok:false},
      {t:"Mga kahong lalagyan ng mga bagong kagamitan",ok:false},
      {t:"Mga patakarang isasabit sa loob ng silid-aralan",ok:false}
    ]
  },
  {
    q:"Bandang anong oras natapos ng mga mag-aaral ang pagtatanim?",
    choices:[
      {t:"Bandang alas-diyes ng umaga",ok:true},
      {t:"Bandang alas-nuwebe ng umaga",ok:false},
      {t:"Bandang alas-onse ng umaga",ok:false},
      {t:"Bandang alas-dose ng tanghali",ok:false}
    ]
  },
  {
    q:"Saan nila inilagay ang iskedyul ng pagdidilig matapos ang pagtatanim?",
    choices:[
      {t:"Sa tabi ng pinto ng kanilang silid-aralan",ok:true},
      {t:"Sa tabi ng bintana ng kanilang silid-aralan",ok:false},
      {t:"Sa gitna ng pisara ng kanilang silid-aralan",ok:false},
      {t:"Sa labas ng tarangkahan ng kanilang paaralan",ok:false}
    ]
  },
  {
    q:"Ilang mag-aaral ang nakatalaga sa pagdidilig sa bawat araw?",
    choices:[
      {t:"Dalawang mag-aaral ang nakatalaga bawat araw",ok:true},
      {t:"Tatlong mag-aaral ang nakatalaga bawat araw",ok:false},
      {t:"Apat na mag-aaral ang nakatalaga bawat araw",ok:false},
      {t:"Limang mag-aaral ang nakatalaga bawat araw",ok:false}
    ]
  },
  {
    q:"Alin ang paalalang tuwirang ibinigay ni Gng. Ramos bago sila bumalik sa klase?",
    choices:[
      {t:"Huwag apakan ang tudling at huwag pumitas nang walang pahintulot",ok:true},
      {t:"Huwag magdilig sa umaga at huwag magdala ng sariling kagamitan",ok:false},
      {t:"Huwag maglagay ng karatula at huwag galawin ang iskedyul ng klase",ok:false},
      {t:"Huwag magtanim ng bagong punla at huwag maglinis nang walang guro",ok:false}
    ]
  },
  {
    q:"Kailan nila napagkasunduang sukatin ang paglaki ng mga halaman at itala ang resulta?",
    choices:[
      {t:"Tuwing Biyernes at ilalagay sa kanilang talaang-pangklase",ok:true},
      {t:"Tuwing Lunes at ilalagay sa kanilang talaang-pangklase",ok:false},
      {t:"Tuwing Miyerkules at ilalagay sa kanilang talaang-pangklase",ok:false},
      {t:"Tuwing Huwebes at ilalagay sa kanilang talaang-pangklase",ok:false}
    ]
  }
];


const module4Questions = [
  {
    q:"Ano ang pinakamakatwirang hinuha kung bakit may mga patak ng tubig mula sa pinto patungo sa reading corner?",
    choices:[
      {t:"May pumasok mula sa ulan at dumiretso sa reading corner habang basa pa ang kaniyang mga gamit.",ok:true},
      {t:"May naglinis ng sahig at sinadyang basain ang daan patungo sa reading corner.",ok:false},
      {t:"May tumapon ng inumin malapit sa pinto at kumalat ang tubig hanggang sa bintana.",ok:false},
      {t:"May tumulo mula sa kisame at nabasa ang buong pasilyo bago pa dumating si Aya.",ok:false}
    ]
  },
  {
    q:"Batay sa basang kurtina, tubig sa ilalim ng bintana, at nakatakip na plastik, ano ang malamang na nangyari bago dumating si Aya?",
    choices:[
      {t:"Pumasok ang ulan sa bintana kaya may nagtakip sa mga aklat upang hindi mabasa.",ok:true},
      {t:"Nilinis ang reading corner kaya tinakpan muna ang mga aklat habang pinupunasan ang sahig.",ok:false},
      {t:"Inayos ang kurtina kaya inilipat ang mga aklat at saka nilagyan ng plastik ang estante.",ok:false},
      {t:"Naghanda ng bagong display kaya tinakpan ang mga aklat bago magsimula ang dekorasyon.",ok:false}
    ]
  },
  {
    q:"Sino ang pinakamalamang na nagsulat ng ‘Naabutan bago mabasa’ sa pisara?",
    choices:[
      {t:"Si Noel, dahil dumating siyang may basahan at agad na tumingin sa bintana.",ok:true},
      {t:"Si Aya, dahil siya ang nakakita sa mensahe nang bumalik para sa kaniyang folder.",ok:false},
      {t:"Ang guro, dahil karaniwan siyang nagbibigay ng paalala sa reading corner.",ok:false},
      {t:"Isang kaklase, dahil maaaring may naiwan ding gamit sa loob ng silid-aralan.",ok:false}
    ]
  },
  {
    q:"Ano ang ipinahihiwatig ng pahayag ni Noel na ‘Buti na lang, hindi na lumakas ulit ang hangin’?",
    choices:[
      {t:"Nag-aalala siyang muling mapasok ng ulan ang bintana at mabasa ang reading corner.",ok:true},
      {t:"Nag-aalala siyang mahirapan silang makauwi kapag muling lumakas ang hangin sa labas.",ok:false},
      {t:"Nag-aalala siyang matumba ang mga upuan at mesa kapag bumalik ang malakas na hangin.",ok:false},
      {t:"Nag-aalala siyang mawala ang kaniyang payong kapag lumakas muli ang ulan sa paaralan.",ok:false}
    ]
  },
  {
    q:"Bakit hindi na nagtanong si Aya kay Noel matapos niya itong makita?",
    choices:[
      {t:"Nabuo na niya ang hinuha mula sa mga bakas, plastik, basahan, at kilos ni Noel.",ok:true},
      {t:"Nagmamadali siyang umuwi kaya ayaw na niyang alamin kung ano ang nangyari sa silid.",ok:false},
      {t:"Naisip niyang walang kinalaman si Noel dahil hindi naman niya hawak ang basang payong.",ok:false},
      {t:"Alam niyang ang guro ang nagtakip sa mga aklat kaya wala nang kailangang itanong pa.",ok:false}
    ]
  },
  {
    q:"Ano ang pinakamalakas na patunay na may nagprotekta sa mga aklat bago dumating si Aya?",
    choices:[
      {t:"Basa ang paligid ng bintana ngunit tuyo ang mga aklat sa ilalim ng malaking plastik.",ok:true},
      {t:"Patay ang ilaw ngunit nakabukas nang kaunti ang pinto nang dumating si Aya.",ok:false},
      {t:"May basang asul na payong na nakasandal malapit sa kabinet ng silid-aralan.",ok:false},
      {t:"Kumakaunti na ang mga tao sa gusali habang bumabalik si Aya sa kanilang silid.",ok:false}
    ]
  },
  {
    q:"Anong katangian ni Noel ang pinakamakatuwirang mahinuha mula sa kaniyang mga ginawa?",
    choices:[
      {t:"May malasakit at kusang kumikilos upang pangalagaan ang mga gamit ng klase.",ok:true},
      {t:"Mahilig mag-ayos ng silid kapag wala nang ibang tao sa loob ng paaralan.",ok:false},
      {t:"Mahiyain at iniiwasang ipaliwanag sa iba ang mga bagay na kaniyang ginagawa.",ok:false},
      {t:"Masinop at laging inuuwi ang mga gamit na maaaring maiwan sa silid-aralan.",ok:false}
    ]
  },
  {
    q:"Kung hindi natakpan ang mga aklat at muling lumakas ang hangin, ano ang pinakamalamang na mangyari?",
    choices:[
      {t:"Mas maraming tubig ang papasok sa bintana at maaaring mabasa ang mga aklat.",ok:true},
      {t:"Magsasara nang kusa ang bintana at mananatiling tuyo ang reading corner.",ok:false},
      {t:"Matutuyo agad ang kurtina dahil malakas ang hangin na papasok sa silid.",ok:false},
      {t:"Lilipat ang tubig sa may pinto at hindi na aabot sa bahagi ng mga aklat.",ok:false}
    ]
  },
  {
    q:"Ano ang maaaring dahilan kung bakit may dalang basahan si Noel nang bumalik siya sa silid?",
    choices:[
      {t:"Balak niyang punasan ang tubig na naiwan sa sahig malapit sa reading corner.",ok:true},
      {t:"Balak niyang linisin ang pisara matapos isulat ang mensahe para sa kaniyang kaklase.",ok:false},
      {t:"Balak niyang punasan ang basang payong bago ito dalhin pauwi matapos ang ulan.",ok:false},
      {t:"Balak niyang linisin ang kabinet dahil may alikabok sa tabi ng reading corner.",ok:false}
    ]
  },
  {
    q:"Ano ang ipinahihiwatig ng pagtulong ni Aya sa pag-aayos ng kurtina at pagligpit ng plastik?",
    choices:[
      {t:"Naunawaan niya ang sitwasyon at pinili niyang makibahagi sa pag-aayos ng silid.",ok:true},
      {t:"Nais niyang malaman kung sino ang nag-iwan ng payong kaya nanatili muna siya roon.",ok:false},
      {t:"Nais niyang matapos ang gawain ni Noel upang mabilis niyang makuha ang kaniyang folder.",ok:false},
      {t:"Nais niyang patunayan na kaya niyang ayusin ang reading corner nang walang tulong ng guro.",ok:false}
    ]
  },
  {
    q:"Alin ang pinakamahusay na konklusyon tungkol sa mga pangyayaring nakita ni Aya?",
    choices:[
      {t:"May bumalik sa silid upang pigilan ang ulan na makasira sa mga aklat at ayusin ang nabasang bahagi.",ok:true},
      {t:"May naiwan sa silid upang maglinis ng reading corner bago magsimula ang susunod na araw ng klase.",ok:false},
      {t:"May nagbukas ng bintana upang pumasok ang hangin at mapatuyo ang basang kurtina sa reading corner.",ok:false},
      {t:"May naghanda ng mga aklat para sa bagong display at pansamantalang tinakpan ang mga ito ng plastik.",ok:false}
    ]
  },
  {
    q:"Kung magpapatuloy ang ganitong kilos nina Aya at Noel, ano ang pinakamakatuwirang mahinuha tungkol sa reading corner?",
    choices:[
      {t:"Mas mapangangalagaan ito dahil may mga mag-aaral na kusang nagmamalasakit sa mga gamit.",ok:true},
      {t:"Mas madalas itong isasara dahil maaaring makalimutan ng mga mag-aaral ang kanilang mga gamit.",ok:false},
      {t:"Mas kaunti ang gagamit nito dahil kailangang bantayan palagi ang bintana kapag umuulan.",ok:false},
      {t:"Mas madalas ililipat ang mga aklat dahil maaaring mabasa muli ang sahig sa susunod na araw.",ok:false}
    ]
  }
];


const module5Questions = [{"q":"May apat na mag-aaral na gustong gumamit ng tahimik na reading area, ngunit iisa na lamang ang bakanteng mesa. Bilang student leader, ano ang pinakatumpak na pasya?","choices":[{"t":"Ialok ang mesa sa nangangailangan ng pinakatahimik na lugar at tulungang humanap ng ibang angkop na puwesto ang iba.","ok":true},{"t":"Ayusin ang apat sa magkakaibang available na lugar at ipaliwanag kung alin ang pinakatahimik at alin ang mas maluwag.","ok":false},{"t":"Hayaang magkasundo ang apat kung sino ang gagamit ng mesa habang naghahanda ka ng alternatibong lugar para sa iba.","ok":false},{"t":"Gumawa ng maikling rotation upang lahat ay magkaroon ng pagkakataong gamitin ang mesa habang nagpapatuloy ang reading hour.","ok":false}]},{"q":"Napansin mong mas maraming humihiram ng aklat, ngunit hindi malinaw kung natatapos o nauunawaan nila ang binabasa. Ano ang pinakamainam na susunod na hakbang?","choices":[{"t":"Magdagdag ng maikling comprehension check at reading log upang maiugnay ang panghihiram sa aktuwal na pagbasa at pag-unawa.","ok":true},{"t":"Magpatuloy sa pagbilang ng hiniram na aklat at ikumpara ito sa attendance upang makita kung pareho silang tumataas.","ok":false},{"t":"Magtanong sa piling kalahok kung anong aklat ang nagustuhan nila at gamitin ang kanilang sagot bilang dagdag na feedback.","ok":false},{"t":"Maghanda ng mas maraming popular na pamagat upang makita kung tataas pa ang bilang ng mga humihiram sa susunod na trial.","ok":false}]},{"q":"Isang kaklase ang mabilis matapos sa teksto ngunit mababa ang comprehension score. Ano ang pinakamakabuluhang payo?","choices":[{"t":"Subukang bawasan nang kaunti ang bilis at huminto sa mahahalagang bahagi upang masuri kung nauunawaan ang binabasa.","ok":true},{"t":"Panatilihin ang kasalukuyang bilis ngunit maglaan ng oras sa dulo upang balikan ang mga bahaging hindi malinaw.","ok":false},{"t":"Gumamit ng daliri o pananda habang nagbabasa upang masundan nang maayos ang bawat linya ng teksto.","ok":false},{"t":"Pumili muna ng mas maikling teksto at unti-unting dagdagan ang haba habang pinananatili ang tuloy-tuloy na pagbasa.","ok":false}]},{"q":"Sa feedback, karamihan ay nasiyahan sa programa ngunit ilang tahimik na mag-aaral ang hindi sumagot sa survey. Ano ang pinakamainam na paraan upang maging mas patas ang datos?","choices":[{"t":"Magbigay ng anonymous na paraan ng pagsagot at hikayatin ang lahat ng uri ng kalahok na magbigay ng puna.","ok":true},{"t":"Magdagdag ng maikling group discussion pagkatapos ng session upang makakuha pa ng komento mula sa mga nais magsalita.","ok":false},{"t":"Mag-interview ng ilang regular na kalahok at ihambing ang kanilang sagot sa naunang survey responses.","ok":false},{"t":"Maglagay ng suggestion box sa library upang magkaroon ng dagdag na paraan ng pagbibigay ng opinyon sa mga susunod na linggo.","ok":false}]},{"q":"May dalawang mungkahi: dagdagan ang reading time o dagdagan ang comprehension activities. Ipinapakita ng datos na sapat ang oras ngunit mababa ang pag-unawa. Ano ang pipiliin mo?","choices":[{"t":"Dagdagan ang comprehension activities dahil iyon ang mas direktang tumutugon sa suliraning ipinakita ng datos.","ok":true},{"t":"Dagdagan nang kaunti ang reading time at obserbahan kung kusang tataas ang pag-unawa sa susunod na session.","ok":false},{"t":"Pagsamahin agad ang dalawang pagbabago upang mas maraming bahagi ng programa ang mapahusay nang sabay-sabay.","ok":false},{"t":"Panatilihin muna ang kasalukuyang setup at kumuha pa ng attendance data bago magpasya kung alin ang babaguhin.","ok":false}]},{"q":"May mag-aaral na hindi nakahiram ng library book ngunit buong oras na nagbasa ng sarili niyang aklat. Paano siya dapat itala?","choices":[{"t":"Itala siyang aktibong kalahok sa reading activity at hiwalay na markahan na sariling aklat ang kaniyang ginamit.","ok":true},{"t":"Isama siya sa attendance at gumawa ng hiwalay na tala para sa mga kalahok na walang library borrowing record.","ok":false},{"t":"Itala ang oras ng kaniyang pagbabasa at idagdag ito sa observation notes upang may ebidensiya ng kaniyang participation.","ok":false},{"t":"Hilinging magbigay siya ng maikling reflection tungkol sa binasa upang magkaroon ng karagdagang record ng kaniyang gawain.","ok":false}]},{"q":"Sa isang session, tumaas ang attendance ngunit naging maingay ang silid at bumaba ang completion rate. Ano ang pinakamainam na pagbabago?","choices":[{"t":"Hatiin ang mga kalahok sa mas maliliit na grupo at gumamit ng available na tahimik na espasyo upang mapanatili ang kalidad ng pagbasa.","ok":true},{"t":"Magtalaga ng student marshals sa bawat bahagi ng silid upang makatulong sa pagpapanatili ng tahimik na kapaligiran.","ok":false},{"t":"Magbigay ng malinaw na paalala sa simula ng session at obserbahan kung bababa ang ingay sa susunod na trial.","ok":false},{"t":"Ayusin ang seating arrangement upang magkaroon ng mas malaking pagitan ang mga mag-aaral habang nagbabasa.","ok":false}]},{"q":"May dalawang magkasalungat na datos: mataas ang satisfaction rating ngunit halos walang pagbabago sa comprehension. Ano ang pinakatumpak na interpretasyon?","choices":[{"t":"Maganda ang karanasan ng mga kalahok, ngunit hindi pa sapat ang ebidensiya upang sabihing umunlad ang comprehension.","ok":true},{"t":"Positibo ang pagtanggap sa programa, kaya maaari itong ipagpatuloy habang kumukuha pa ng mas maraming comprehension data.","ok":false},{"t":"May indikasyon ng tagumpay sa engagement, kaya dapat suriin kung kailangan lamang baguhin ang paraan ng comprehension assessment.","ok":false},{"t":"Mahalaga ang dalawang resulta, kaya kailangang ikumpara pa ang attendance, feedback, at scores bago gumawa ng pangmatagalang pasya.","ok":false}]},{"q":"Napansin mong may mga mag-aaral na pinipili lamang ang pinakamaikling teksto upang mabilis matapos. Ano ang pinakamainam na tugon?","choices":[{"t":"Magbigay ng pagpipiliang teksto na magkakaiba ang paksa ngunit kontrolado ang antas at inaasahang reading task.","ok":true},{"t":"Maghanda ng listahan ng inirerekomendang teksto at hayaang pumili ang mag-aaral ayon sa interes at oras na mayroon siya.","ok":false},{"t":"Magpatupad ng minimum reading time upang mahikayat silang manatili sa gawain kahit maikli ang napiling teksto.","ok":false},{"t":"Magdagdag ng reflection question sa bawat teksto upang magkaroon ng pare-parehong gawain pagkatapos magbasa.","ok":false}]},{"q":"Bago palawakin ang programa sa ibang seksyon, ano ang pinakamahalagang ihanda upang maging maihahambing ang resulta?","choices":[{"t":"Pare-parehong panuto, mastery criterion, paraan ng pagtatala, at malinaw na proseso ng assessment sa bawat seksyon.","ok":true},{"t":"Isang common schedule at parehong bilang ng upuan upang maging halos pareho ang pisikal na setup ng bawat session.","ok":false},{"t":"Parehong listahan ng aklat at reading materials upang pare-pareho ang pagpipiliang makikita ng bawat seksyon.","ok":false},{"t":"Isang orientation para sa student leaders upang pareho ang paraan nila ng paggabay at pagbibigay ng paalala.","ok":false}]},{"q":"Isang mag-aaral ang naka-83% sa unang trial at 92% sa ikalawa. Ano ang pinakatumpak na paggamit sa dalawang resultang ito?","choices":[{"t":"Panatilihin ang parehong trial records upang makita ang mastery at ang pagbabago ng performance sa bawat pagtatangka.","ok":true},{"t":"Gamitin ang 92% bilang final mastery score ngunit panatilihin ang 83% bilang bahagi ng progress record.","ok":false},{"t":"Ihambing ang dalawang scores sa oras na ginugol upang makita kung may pagbabago sa bilis ng pagsagot at performance.","ok":false},{"t":"Isama ang dalawang scores sa learner profile at gamitin ang mas mataas na marka sa pagpapasya kung bubuksan ang susunod na module.","ok":false}]},{"q":"Matapos ang trial, tumaas ang participation at borrowing, gumanda ang feedback, ngunit maliit lamang ang pag-angat sa comprehension. Bilang evaluator, ano ang pinakamainam na rekomendasyon?","choices":[{"t":"Ipagpatuloy ang intervention na may tiyak na pagbabago sa comprehension activities at muling sukatin bago ito palawakin.","ok":true},{"t":"Ipagpatuloy ang kasalukuyang programa sa mas mahabang panahon upang makita kung lalakas pa ang comprehension trend.","ok":false},{"t":"Palawakin muna sa isang karagdagang seksyon habang kinokolekta ang parehong participation, borrowing, feedback, at comprehension data.","ok":false},{"t":"Panatilihin muna sa kasalukuyang grupo at magsagawa ng learner interviews upang matukoy kung aling bahagi ang dapat unahing baguhin.","ok":false}]}];

let current1=0, score1=0, answered1=false, order1=[];
let current2=0, score2=0, answered2=false, order2=[];
let current3=0, score3=0, answered3=false, order3=[];
let current4=0, score4=0, answered4=false, order4=[];
let current5=0, score5=0, answered5=false, order5=[];
let timerInterval=null, timerStart=null, elapsedSeconds=0;

const TIME_LOG_KEY='kawil_page_time_log_v1';
let activeTimeKey=null;
let activeTimeStarted=null;

const TRIALS_KEY='kawil_trials_v2';
let trialBaselines={};

function getTrials(){
  try{return JSON.parse(localStorage.getItem(TRIALS_KEY)||'{}');}catch(e){return {};}
}
function beginTrial(moduleNo){
  flushActiveTime();
  const log=getTimeLog();
  const prefix=`m${moduleNo}_`;
  const snap={};
  Object.entries(log).forEach(([k,v])=>{if(k.startsWith(prefix))snap[k]=Number(v||0);});
  trialBaselines[moduleNo]=snap;
}
function recordTrial(moduleNo,score,total,extra={}){
  flushActiveTime();
  const log=getTimeLog(), base=trialBaselines[moduleNo]||{}, prefix=`m${moduleNo}_`;
  const pageTimes={};
  Object.entries(log).forEach(([k,v])=>{
    if(k.startsWith(prefix)){
      const label=k===`${prefix}teksto`?'Teksto':k.replace(`${prefix}tanong_`,'Tanong ');
      const delta=Math.max(0,Number(v||0)-Number(base[k]||0));
      if(delta>0) pageTimes[label]=delta;
    }
  });
  const totalMs=Object.values(pageTimes).reduce((a,b)=>a+b,0);
  const all=getTrials();
  const key=`m${moduleNo}`;
  if(!Array.isArray(all[key])) all[key]=[];
  const attempt={
    trial:all[key].length+1, score, total, pct:Math.round(score/total*100),
    totalMs, pageTimes, readingSeconds:extra.readingSeconds||null,
    finishedAt:new Date().toISOString()
  };
  all[key].push(attempt);
  localStorage.setItem(TRIALS_KEY,JSON.stringify(all));
  queueAttemptSync(moduleNo,attempt);
  trialBaselines[moduleNo]={};
}
function renderJourneyResults(){
  const host=document.getElementById('journeySummary'); if(!host)return;
  const all=getTrials();
  const names=['Word Detective','Time-Attack Reader','Fact Hunter','Mystery Case','Decision Choice'];
  let html='';
  for(let m=1;m<=5;m++){
    const trials=all[`m${m}`]||[];
    html+=`<section class="module-report"><div class="report-head"><h3>Modyul ${m} • ${names[m-1]}</h3><span>${trials.length} pagtatangka</span></div>`;
    if(!trials.length){html+='<p>Wala pang naitalang pagtatangka.</p></section>';continue;}
    html+='<div class="trial-table-wrap"><table class="trial-table"><thead><tr><th>Trial</th><th>Score</th><th>Percent</th><th>Kabuuang Oras</th></tr></thead><tbody>';
    trials.forEach(t=>{html+=`<tr><td>${t.trial}</td><td>${t.score}/${t.total}</td><td>${t.pct}%</td><td>${formatDuration(t.totalMs)}</td></tr>`;});
    html+='</tbody></table></div>';
    trials.forEach(t=>{
      html+=`<details class="time-detail"><summary>Trial ${t.trial} • oras sa bawat pahina</summary><div class="page-time-grid">`;
      Object.entries(t.pageTimes||{}).forEach(([label,ms])=>{html+=`<div><span>${label}</span><strong>${formatDuration(ms)}</strong></div>`;});
      if(t.readingSeconds) html+=`<div><span>Timed oral reading</span><strong>${formatTime(t.readingSeconds)}</strong></div>`;
      html+='</div></details>';
    });
    html+='</section>';
  }
  host.innerHTML=html;
}

function getTimeLog(){
  try{return JSON.parse(localStorage.getItem(TIME_LOG_KEY)||'{}');}
  catch(e){return {};}
}
function saveTimeLog(log){ localStorage.setItem(TIME_LOG_KEY,JSON.stringify(log)); }
function flushActiveTime(){
  if(!activeTimeKey || activeTimeStarted===null) return;
  const now=Date.now();
  const elapsed=Math.max(0,now-activeTimeStarted);
  const log=getTimeLog();
  log[activeTimeKey]=(log[activeTimeKey]||0)+elapsed;
  saveTimeLog(log);
  activeTimeStarted=now;
}
function setTrackedPage(key){
  flushActiveTime();
  activeTimeKey=key;
  activeTimeStarted=(key && !document.hidden)?Date.now():null;
}
function screenTimeKey(id){
  const map={
    module1Screen:'m1_teksto', module2Screen:'m2_teksto', module3Screen:'m3_teksto',
    module4Screen:'m4_teksto', module5Screen:'m5_teksto'
  };
  if(Object.prototype.hasOwnProperty.call(map,id)) return map[id];
  if(/^quiz\d*Screen$/.test(id) || id==='quizScreen') return undefined;
  return null;
}
function totalModuleMs(moduleNo){
  flushActiveTime();
  const log=getTimeLog();
  return Object.entries(log).filter(([k])=>k.startsWith(`m${moduleNo}_`)).reduce((a,[,v])=>a+Number(v||0),0);
}
function formatDuration(ms){
  const total=Math.max(0,Math.round(ms/1000));
  const h=Math.floor(total/3600), m=Math.floor((total%3600)/60), sec=total%60;
  if(h>0) return `${h} oras ${m} min ${sec} seg`;
  if(m>0) return `${m} min ${sec} seg`;
  return `${sec} seg`;
}
function showModuleTime(moduleNo,elementId){
  const el=document.getElementById(elementId); if(!el) return;
  el.textContent=`Kabuuang oras sa Modyul ${moduleNo}: ${formatDuration(totalModuleMs(moduleNo))}`;
}


const PARTICIPANT_KEY='kawil_participant_v2';
const API_URL=(window.KAWIL_CONFIG&&String(window.KAWIL_CONFIG.apiUrl||'').trim())||'';
const PENDING_SYNC_KEY='kawil_pending_sync_v1';

function getParticipant(){try{return JSON.parse(localStorage.getItem(PARTICIPANT_KEY)||'{}')}catch(e){return {}}}
function saveParticipant(p){localStorage.setItem(PARTICIPANT_KEY,JSON.stringify(p));}
function restoreParticipant(){
  const p=getParticipant();
  [['learnerName','name'],['learnerSection','section'],['learnerNumber','number']].forEach(([id,k])=>{const el=document.getElementById(id);if(el&&p[k])el.value=p[k];});
}
function normalizeIdentity(v){return String(v||'').trim().replace(/\s+/g,' ').toLowerCase();}
function setRegistrationStatus(message,state=''){
  const el=document.getElementById('registrationStatus'); if(!el)return;
  el.innerHTML=message; el.classList.remove('working','success','error'); if(state)el.classList.add(state);
}
async function callKawilApi(payload){
  if(!API_URL) throw new Error('NO_API');
  const response=await fetch(API_URL,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload),redirect:'follow'});
  if(!response.ok) throw new Error(`HTTP ${response.status}`);
  const data=await response.json();
  if(!data||data.ok!==true) throw new Error(data&&data.error?data.error:'Hindi tinanggap ng record server ang request.');
  return data;
}
function localAutoNumber(name,section){
  const key='kawil_local_registry_v1'; let registry=[];
  try{registry=JSON.parse(localStorage.getItem(key)||'[]')}catch(e){registry=[]}
  const nn=normalizeIdentity(name),ns=normalizeIdentity(section);
  const found=registry.find(r=>r.nn===nn&&r.ns===ns);
  if(found)return found.no;
  const next=registry.reduce((m,r)=>Math.max(m,parseInt(String(r.no).replace(/\D/g,''),10)||0),0)+1;
  const no=next<10?`0${next}`:String(next); registry.push({nn,ns,no});localStorage.setItem(key,JSON.stringify(registry));return no;
}
async function enterJourney(){
  const name=(document.getElementById('learnerName')?.value||'').trim().replace(/\s+/g,' ');
  const section=(document.getElementById('learnerSection')?.value||'').trim().replace(/\s+/g,' ');
  const noEl=document.getElementById('learnerNumber');
  if(!name||!section){alert('Pakilagay ang iyong buong pangalan at Baitang at Seksyon bago magsimula.');return;}
  const current=getParticipant();
  if(current.number&&normalizeIdentity(current.name)===normalizeIdentity(name)&&normalizeIdentity(current.section)===normalizeIdentity(section)){
    if(noEl)noEl.value=current.number; showScreen('dashboardScreen'); return;
  }
  setRegistrationStatus('⏳ Inihahanda ang iyong ARAL Tutee No. …','working');
  try{
    let number;
    if(API_URL){
      const data=await callKawilApi({action:'register',name,section}); number=String(data.tuteeNo||'');
    }else{
      number=localAutoNumber(name,section);
    }
    if(!number)throw new Error('Walang naibalik na ARAL Tutee No.');
    const participant={name,section,number}; saveParticipant(participant); if(noEl)noEl.value=number;
    setRegistrationStatus(`✅ ARAL Tutee No. <strong>${number}</strong> — ${API_URL?'nakaugnay sa central record.':'lokal na test number lamang.'}`,'success');
    showScreen('dashboardScreen');
  }catch(err){
    setRegistrationStatus('⚠️ Hindi makakonekta sa central record. Pakisubukan muli kapag may internet.','error');
    alert('Hindi maitalaga ang ARAL Tutee No. mula sa central record. Pakisubukan muli.');
  }
}
function getPendingSync(){try{return JSON.parse(localStorage.getItem(PENDING_SYNC_KEY)||'[]')}catch(e){return []}}
function savePendingSync(items){localStorage.setItem(PENDING_SYNC_KEY,JSON.stringify(items));}
async function sendAttemptToCentral(moduleNo,attempt){
  if(!API_URL)return;
  const participant=getParticipant(); if(!participant.number)return;
  await callKawilApi({action:'saveAttempt',participant,moduleNo,attempt});
}
async function flushPendingSync(){
  if(!API_URL||!navigator.onLine)return;
  const pending=getPendingSync(); if(!pending.length)return;
  const remaining=[];
  for(const item of pending){try{await sendAttemptToCentral(item.moduleNo,item.attempt)}catch(e){remaining.push(item)}}
  savePendingSync(remaining);
}
function queueAttemptSync(moduleNo,attempt){
  if(!API_URL)return;
  sendAttemptToCentral(moduleNo,attempt).catch(()=>{const q=getPendingSync();q.push({moduleNo,attempt});savePendingSync(q);});
}
function csvCell(v){const s=String(v??'');return '"'+s.replace(/"/g,'""')+'"';}
function buildExportRows(){
  const p=getParticipant(),all=getTrials(),rows=[];
  for(let m=1;m<=5;m++) for(const t of (all[`m${m}`]||[])){
    const base=[p.number,p.name,p.section,m,t.trial,t.score,t.total,t.pct,Math.round((t.totalMs||0)/1000),t.readingSeconds||'',t.finishedAt||''];
    const times=t.pageTimes||{};
    rows.push(base.concat(['Teksto',Math.round((times['Teksto']||0)/1000)]));
    for(let q=1;q<=12;q++) rows.push(base.concat([`Tanong ${q}`,Math.round((times[`Tanong ${q}`]||0)/1000)]));
  }
  return rows;
}
function downloadBlob(text,name,type){const blob=new Blob([text],{type});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);}
function safeFilePart(s){return String(s||'participant').replace(/[^a-zA-Z0-9_-]+/g,'_').slice(0,40);}
function downloadResultsCSV(){
  const p=getParticipant(); const header=['Participant No','Pangalan','Seksyon','Modyul','Trial','Score','Total','Percent','Kabuuang Active Time (sec)','Timed Oral Reading (sec)','Finished At','Page','Active Time sa Page (sec)'];
  const lines=[header,...buildExportRows()].map(r=>r.map(csvCell).join(','));
  downloadBlob('﻿'+lines.join('\n'),`KAWIL_${safeFilePart(p.number)}_results.csv`,'text/csv;charset=utf-8');
}
function downloadResultsJSON(){const p=getParticipant();downloadBlob(JSON.stringify({participant:p,exportedAt:new Date().toISOString(),trials:getTrials()},null,2),`KAWIL_${safeFilePart(p.number)}_backup.json`,'application/json');}

function showScreen(id){
  const timeKey=screenTimeKey(id);
  if(timeKey!==undefined) setTrackedPage(timeKey);
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  const target=document.getElementById(id);
  if(target) target.classList.add('active');
  if(id==='dashboardScreen') updateDashboard();
  if(id==='module2Screen') restoreTimerState();
  if(id==='journeyResultScreen') renderJourneyResults();
  window.scrollTo({top:0,behavior:'smooth'});
}

function shuffled(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

function setGuideState(imgId,msgId,state,message){
  const img=document.getElementById(imgId);
  const map={
    neutral:'images/kawil-guide-tandaan-clean.png',
    correct:'images/kawil-guide-correct.png',
    wrong:'images/kawil-guide-wrong.png'
  };
  if(img){
    img.src=map[state]||map.neutral;
    img.dataset.state=state;
  }
  const msg=document.getElementById(msgId);
  if(msg) msg.textContent=message;
}

function startModule1(){
  beginTrial(1);
  current1=0; score1=0; answered1=false;
  order1=module1Questions.map(q=>shuffled(q.choices));
  loadQuestion1();
  showScreen('quizScreen');
}

function loadQuestion1(){
  answered1=false;
  setTrackedPage(`m1_tanong_${current1+1}`);
  const item=module1Questions[current1];
  const choices=order1[current1];
  document.getElementById('questionCounter').textContent=`Tanong ${current1+1} / ${module1Questions.length}`;
  document.getElementById('progressBar').style.width=`${(current1/module1Questions.length)*100}%`;
  document.getElementById('questionText').textContent=item.q;
  setGuideState('quizGuideImage','guideMessage','neutral','Basahin nang mabuti ang tanong at balikan ang kuwento kung kinakailangan.');
  renderChoices('choices',choices,(choice,button)=>answer1(choice,button));
  resetFeedback('feedback','nextBtn');
}

function answer1(choice,button){
  if(answered1) return;
  answered1=true;
  lockChoices('choices',order1[current1],button,choice.ok);
  const feedback=document.getElementById('feedback');
  if(choice.ok){
    score1++;
    feedback.textContent='🎉 Tama! Mahusay ang iyong pagkilala at pag-unawa sa salita.';
    feedback.className='feedback good';
    setGuideState('quizGuideImage','guideMessage','correct','Mahusay! Tama ang sagot mo. Ipagpatuloy natin ang paglalakbay!');
  }else{
    feedback.textContent='💡 Hindi pa tama. Tingnan ang tamang sagot at balikan ang bahaging nagbibigay ng clue.';
    feedback.className='feedback retry';
    setGuideState('quizGuideImage','guideMessage','wrong','Subukan muli sa susunod na pagtatangka. Balikan ang clue sa kuwento.');
  }
  document.getElementById('nextBtn').classList.remove('hidden');
}

function nextQuestion(){
  current1++;
  if(current1<module1Questions.length) loadQuestion1(); else showResult1();
}

function showResult1(){
  const pct=Math.round((score1/module1Questions.length)*100);
  const mastered=pct>=MASTERY_PERCENT;
  recordTrial(1,score1,module1Questions.length);
  saveHighest('kawil_m1_highest',pct);
  if(mastered) localStorage.setItem('kawil_m1_mastered','true');
  document.getElementById('finalScore').textContent=`${score1} / ${module1Questions.length}`;
  document.getElementById('finalPercent').textContent=`${pct}%`;
  document.getElementById('resultGuideImage').src=mastered?'images/kawil-guide-complete.png':'images/kawil-guide-wrong.png';
  fillResult({
    mastered,pct,
    scoreMessageId:'scoreMessage',masteryId:'masteryMessage',actionsId:'resultActions',
    passText:'Mahusay! Naabot mo ang mastery level para sa Pagkilala sa Salita.',
    nextText:'MAGPATULOY SA MODYUL 2 →',nextAction:()=>showScreen('module2Screen'),
    reviewAction:()=>showScreen('module1Screen'),retryAction:startModule1
  });
  setTrackedPage(null);
  showModuleTime(1,'moduleTime1');
  updateDashboard();
  showScreen('resultScreen');
}

function startModule2(){
  if(localStorage.getItem('kawil_m2_timed_done')!=='true'){
    alert('Tapusin muna ang timed reading bago simulan ang hamon.');
    return;
  }
  beginTrial(2);
  current2=0; score2=0; answered2=false;
  order2=module2Questions.map(q=>shuffled(q.choices));
  loadQuestion2();
  showScreen('quiz2Screen');
}

function loadQuestion2(){
  answered2=false;
  setTrackedPage(`m2_tanong_${current2+1}`);
  const item=module2Questions[current2];
  const choices=order2[current2];
  document.getElementById('questionCounter2').textContent=`Tanong ${current2+1} / ${module2Questions.length}`;
  document.getElementById('progressBar2').style.width=`${(current2/module2Questions.length)*100}%`;
  document.getElementById('questionText2').textContent=item.q;
  setGuideState('quizGuideImage2','guideMessage2','neutral','Pansinin ang bantas, paghinto, at pagpapangkat ng mga salita.');
  renderChoices('choices2',choices,(choice,button)=>answer2(choice,button));
  resetFeedback('feedback2','nextBtn2');
}

function answer2(choice,button){
  if(answered2) return;
  answered2=true;
  lockChoices('choices2',order2[current2],button,choice.ok);
  const feedback=document.getElementById('feedback2');
  if(choice.ok){
    score2++;
    feedback.textContent='🎉 Tama! Magandang fluency strategy ang napili mo.';
    feedback.className='feedback good';
    setGuideState('quizGuideImage2','guideMessage2','correct','Mahusay! Malinaw ang iyong pag-unawa sa wastong pagbasa.');
  }else{
    feedback.textContent='💡 Hindi pa tama. Pansinin ang bantas, natural na parirala, o detalye sa teksto.';
    feedback.className='feedback retry';
    setGuideState('quizGuideImage2','guideMessage2','wrong','Balikan ang teksto at isipin kung paano magiging malinaw at natural ang pagbasa.');
  }
  document.getElementById('nextBtn2').classList.remove('hidden');
}

function nextQuestion2(){
  current2++;
  if(current2<module2Questions.length) loadQuestion2(); else showResult2();
}

function showResult2(){
  const pct=Math.round((score2/module2Questions.length)*100);
  const mastered=pct>=MASTERY_PERCENT;
  recordTrial(2,score2,module2Questions.length,{readingSeconds:Number(localStorage.getItem('kawil_m2_time')||0)});
  saveHighest('kawil_m2_highest',pct);
  if(mastered) localStorage.setItem('kawil_m2_mastered','true');
  document.getElementById('finalScore2').textContent=`${score2} / ${module2Questions.length}`;
  document.getElementById('finalPercent2').textContent=`${pct}%`;
  document.getElementById('resultGuideImage2').src=mastered?'images/kawil-guide-complete.png':'images/kawil-guide-wrong.png';
  const secs=Number(localStorage.getItem('kawil_m2_time')||0);
  document.getElementById('readingTimeResult').textContent=secs?`Timed reading practice: ${formatTime(secs)}`:'';
  fillResult({
    mastered,pct,
    scoreMessageId:'scoreMessage2',masteryId:'masteryMessage2',actionsId:'resultActions2',
    passText:'Mahusay! Naabot mo ang mastery level para sa Bilis at Kasanayan sa Pagbasa.',
    nextText:'MAGPATULOY SA MODYUL 3 →',nextAction:()=>showScreen('module3Screen'),
    reviewAction:()=>showScreen('module2Screen'),retryAction:startModule2
  });
  setTrackedPage(null);
  showModuleTime(2,'moduleTime2');
  updateDashboard();
  showScreen('result2Screen');
}


function startModule3(){
  beginTrial(3);
  current3=0; score3=0; answered3=false;
  order3=module3Questions.map(q=>shuffled(q.choices));
  loadQuestion3();
  showScreen('quiz3Screen');
}

function loadQuestion3(){
  answered3=false;
  setTrackedPage(`m3_tanong_${current3+1}`);
  const item=module3Questions[current3];
  const choices=order3[current3];
  document.getElementById('questionCounter3').textContent=`Tanong ${current3+1} / ${module3Questions.length}`;
  document.getElementById('progressBar3').style.width=`${(current3/module3Questions.length)*100}%`;
  document.getElementById('questionText3').textContent=item.q;
  setGuideState('quizGuideImage3','guideMessage3','neutral','Hanapin ang detalyeng tuwirang nakasaad sa teksto bago pumili ng sagot.');
  renderChoices('choices3',choices,(choice,button)=>answer3(choice,button));
  resetFeedback('feedback3','nextBtn3');
}

function answer3(choice,button){
  if(answered3) return;
  answered3=true;
  lockChoices('choices3',order3[current3],button,choice.ok);
  const feedback=document.getElementById('feedback3');
  if(choice.ok){
    score3++;
    feedback.textContent='🎉 Tama! Nahanap mo ang eksaktong detalyeng nakasaad sa teksto.';
    feedback.className='feedback good';
    setGuideState('quizGuideImage3','guideMessage3','correct','Mahusay! Tama ang detalye na nakuha mo mula sa teksto.');
  }else{
    feedback.textContent='💡 Hindi pa tama. Balikan ang bahagi ng teksto kung saan tuwirang binanggit ang detalye.';
    feedback.className='feedback retry';
    setGuideState('quizGuideImage3','guideMessage3','wrong','Balikan ang teksto at hanapin ang eksaktong impormasyong hinihingi.');
  }
  document.getElementById('nextBtn3').classList.remove('hidden');
}

function nextQuestion3(){
  current3++;
  if(current3<module3Questions.length) loadQuestion3(); else showResult3();
}

function showResult3(){
  const pct=Math.round((score3/module3Questions.length)*100);
  const mastered=pct>=MASTERY_PERCENT;
  recordTrial(3,score3,module3Questions.length);
  saveHighest('kawil_m3_highest',pct);
  if(mastered) localStorage.setItem('kawil_m3_mastered','true');
  document.getElementById('finalScore3').textContent=`${score3} / ${module3Questions.length}`;
  document.getElementById('finalPercent3').textContent=`${pct}%`;
  document.getElementById('resultGuideImage3').src=mastered?'images/kawil-guide-complete.png':'images/kawil-guide-wrong.png';
  setTrackedPage(null);
  showModuleTime(3,'moduleTime3');
  fillResult({
    mastered,pct,
    scoreMessageId:'scoreMessage3',masteryId:'masteryMessage3',actionsId:'resultActions3',
    passText:'Mahusay! Naabot mo ang mastery level para sa Literal na Pag-unawa.',
    nextText:'MAGPATULOY SA MODYUL 4 →',nextAction:()=>showScreen('module4Screen'),
    reviewAction:()=>showScreen('module3Screen'),retryAction:startModule3
  });
  updateDashboard();
  showScreen('result3Screen');
}

function startModule4(){
  beginTrial(4);
  current4=0; score4=0; answered4=false;
  order4=module4Questions.map(q=>shuffled(q.choices));
  loadQuestion4();
  showScreen('quiz4Screen');
}

function loadQuestion4(){
  answered4=false;
  setTrackedPage(`m4_tanong_${current4+1}`);
  const item=module4Questions[current4];
  const choices=order4[current4];
  document.getElementById('questionCounter4').textContent=`Tanong ${current4+1} / ${module4Questions.length}`;
  document.getElementById('progressBar4').style.width=`${(current4/module4Questions.length)*100}%`;
  document.getElementById('questionText4').textContent=item.q;
  setGuideState('quizGuideImage4','guideMessage4','neutral','Hanapin ang mga clue at piliin ang hinuha na may pinakamalakas na batayan.');
  renderChoices('choices4',choices,(choice,button)=>answer4(choice,button));
  resetFeedback('feedback4','nextBtn4');
}

function answer4(choice,button){
  if(answered4) return;
  answered4=true;
  lockChoices('choices4',order4[current4],button,choice.ok);
  const feedback=document.getElementById('feedback4');
  if(choice.ok){
    score4++;
    feedback.textContent='🎉 Tama! Mahusay mong pinagsama ang mga pahiwatig upang makabuo ng lohikal na hinuha.';
    feedback.className='feedback good';
    setGuideState('quizGuideImage4','guideMessage4','correct','Mahusay! Malinaw ang ugnayan ng mga clue at ng iyong hinuha.');
  }else{
    feedback.textContent='💡 Hindi pa tama. Balikan ang mga clue at piliin ang sagot na pinakamatibay ang batayan sa teksto.';
    feedback.className='feedback retry';
    setGuideState('quizGuideImage4','guideMessage4','wrong','Balikan ang mga pahiwatig. Hindi lahat ng posibleng sagot ay may sapat na ebidensiya sa teksto.');
  }
  document.getElementById('nextBtn4').classList.remove('hidden');
}

function nextQuestion4(){
  current4++;
  if(current4<module4Questions.length) loadQuestion4(); else showResult4();
}

function showResult4(){
  const pct=Math.round((score4/module4Questions.length)*100);
  const mastered=pct>=MASTERY_PERCENT;
  recordTrial(4,score4,module4Questions.length);
  saveHighest('kawil_m4_highest',pct);
  if(mastered) localStorage.setItem('kawil_m4_mastered','true');
  document.getElementById('finalScore4').textContent=`${score4} / ${module4Questions.length}`;
  document.getElementById('finalPercent4').textContent=`${pct}%`;
  document.getElementById('resultGuideImage4').src=mastered?'images/kawil-guide-complete.png':'images/kawil-guide-wrong.png';
  setTrackedPage(null);
  showModuleTime(4,'moduleTime4');
  fillResult({
    mastered,pct,
    scoreMessageId:'scoreMessage4',masteryId:'masteryMessage4',actionsId:'resultActions4',
    passText:'Mahusay! Naabot mo ang mastery level para sa Mapagpahiwatig na Pag-unawa.',
    nextText:'MAGPATULOY SA MODYUL 5 →',nextAction:()=>showScreen('module5Screen'),
    reviewAction:()=>showScreen('module4Screen'),retryAction:startModule4
  });
  updateDashboard();
  showScreen('result4Screen');
}


function startModule5(){ beginTrial(5); current5=0; score5=0; answered5=false; order5=module5Questions.map(q=>shuffled(q.choices)); loadQuestion5(); showScreen('quiz5Screen'); }
function loadQuestion5(){ answered5=false; setTrackedPage(`m5_tanong_${current5+1}`); const item=module5Questions[current5], choices=order5[current5]; document.getElementById('questionCounter5').textContent=`Tanong ${current5+1} / ${module5Questions.length}`; document.getElementById('progressBar5').style.width=`${(current5/module5Questions.length)*100}%`; document.getElementById('questionText5').textContent=item.q; setGuideState('quizGuideImage5','guideMessage5','neutral','Master level: timbangin ang ebidensiya, limitasyon, at posibleng epekto bago pumili.'); renderChoices('choices5',choices,(choice,button)=>answer5(choice,button)); resetFeedback('feedback5','nextBtn5'); }
function answer5(choice,button){ if(answered5)return; answered5=true; lockChoices('choices5',order5[current5],button,choice.ok); const f=document.getElementById('feedback5'); if(choice.ok){score5++; f.textContent='🏆 Tama! Pinili mo ang pasyang may pinakamatibay na ebidensiya at katuwiran.'; f.className='feedback good'; setGuideState('quizGuideImage5','guideMessage5','correct','Mahusay! Kritikal mong nasuri ang ebidensiya at epekto ng pasya.');}else{f.textContent='💡 Hindi pa tama. Suriin kung sapat ang ebidensiya at kung isinasaalang-alang ng sagot ang buong sitwasyon.'; f.className='feedback retry'; setGuideState('quizGuideImage5','guideMessage5','wrong','Balikan ang teksto. Hanapin ang pasyang hindi lamang posible kundi may pinakamalakas na batayan.');} document.getElementById('nextBtn5').classList.remove('hidden'); }
function nextQuestion5(){ current5++; if(current5<module5Questions.length) loadQuestion5(); else showResult5(); }
function showResult5(){ const pct=Math.round((score5/module5Questions.length)*100), mastered=pct>=MASTERY_PERCENT; recordTrial(5,score5,module5Questions.length); saveHighest('kawil_m5_highest',pct); if(mastered)localStorage.setItem('kawil_m5_mastered','true'); document.getElementById('finalScore5').textContent=`${score5} / ${module5Questions.length}`; document.getElementById('finalPercent5').textContent=`${pct}%`; document.getElementById('resultGuideImage5').src=mastered?'images/kawil-guide-complete.png':'images/kawil-guide-wrong.png'; setTrackedPage(null); showModuleTime(5,'moduleTime5'); const msg=document.getElementById('scoreMessage5'), banner=document.getElementById('masteryMessage5'), actions=document.getElementById('resultActions5'); actions.innerHTML=''; if(mastered){msg.textContent='Napakahusay! Naabot mo ang mastery level sa Kritikal na Pag-unawa.'; banner.className='mastery-banner passed'; banner.innerHTML='🏆 <strong>K.A.W.I.L. READING JOURNEY COMPLETED!</strong><br>Naabot mo ang 80% pataas sa Master Level.'; const b=document.createElement('button');b.className='primary-btn';b.textContent='TINGNAN ANG IYONG RESULTA →';b.onclick=()=>showScreen('journeyResultScreen');actions.appendChild(b);}else{msg.textContent='Master level ito. Kailangan pang palakasin ang kritikal na pagsusuri bago makumpleto ang paglalakbay.';banner.className='mastery-banner locked-banner';banner.innerHTML=`🔒 <strong>MASTERY REQUIRED: 80% PATAAS</strong><br>Kasalukuyang marka: ${pct}%. Balikan ang teksto at suriin muli ang ebidensiya.`; const r=document.createElement('button');r.className='secondary-btn';r.textContent='← BALIK SA TEKSTO';r.onclick=()=>showScreen('module5Screen');const t=document.createElement('button');t.className='primary-btn';t.textContent='↻ SUBUKAN MULI';t.onclick=startModule5;actions.append(r,t);} updateDashboard(); showScreen('result5Screen'); }

function renderChoices(containerId,choices,onAnswer){
  const box=document.getElementById(containerId);
  box.innerHTML='';
  choices.forEach((choice,i)=>{
    const b=document.createElement('button');
    b.className='choice';
    b.textContent=`${String.fromCharCode(65+i)}. ${choice.t}`;
    b.onclick=()=>onAnswer(choice,b);
    box.appendChild(b);
  });
}

function lockChoices(containerId,choices,selectedButton,isCorrect){
  document.querySelectorAll(`#${containerId} .choice`).forEach((b,idx)=>{
    b.disabled=true;
    if(choices[idx].ok) b.classList.add('correct');
  });
  if(!isCorrect) selectedButton.classList.add('wrong');
}

function resetFeedback(feedbackId,nextBtnId){
  document.getElementById(feedbackId).className='feedback hidden';
  document.getElementById(nextBtnId).classList.add('hidden');
}

function fillResult(cfg){
  const msg=document.getElementById(cfg.scoreMessageId);
  const mastery=document.getElementById(cfg.masteryId);
  const actions=document.getElementById(cfg.actionsId);
  actions.innerHTML='';
  if(cfg.mastered){
    msg.textContent=cfg.passText;
    mastery.className='mastery-banner passed';
    mastery.innerHTML='🔓 <strong>MASTERED!</strong> Naabot mo ang 80% pataas. Bukas na ang susunod na himpilan.';
    const next=document.createElement('button');
    next.className='primary-btn'; next.textContent=cfg.nextText; next.onclick=cfg.nextAction;
    actions.appendChild(next);
  }else{
    msg.textContent='Kailangan pang palakasin ang kasanayan bago tumawid sa susunod na modyul.';
    mastery.className='mastery-banner locked-banner';
    mastery.innerHTML=`🔒 <strong>MASTERY REQUIRED: 80% PATAAS</strong><br>Kasalukuyang marka: ${cfg.pct}%. Balikan ang teksto at subukan muli. Mag-iiba ang ayos ng mga pagpipilian sa bawat pagtatangka.`;
    const review=document.createElement('button');
    review.className='secondary-btn'; review.textContent='← BALIK SA TEKSTO'; review.onclick=cfg.reviewAction;
    const retry=document.createElement('button');
    retry.className='primary-btn'; retry.textContent='↻ SUBUKAN MULI'; retry.onclick=cfg.retryAction;
    actions.append(review,retry);
  }
}

function saveHighest(key,pct){
  const highest=Math.max(Number(localStorage.getItem(key)||0),pct);
  localStorage.setItem(key,String(highest));
}

function updateDashboard(){
  const m1=localStorage.getItem('kawil_m1_mastered')==='true';
  const m2=localStorage.getItem('kawil_m2_mastered')==='true';
  const m3=localStorage.getItem('kawil_m3_mastered')==='true';
  const m4=localStorage.getItem('kawil_m4_mastered')==='true';
  const m5=localStorage.getItem('kawil_m5_mastered')==='true';
  const stop1=document.getElementById('stop1'), stop2=document.getElementById('stop2'), stop3=document.getElementById('stop3'), stop4=document.getElementById('stop4'), stop5=document.getElementById('stop5');
  const status1=document.getElementById('status1'), status2=document.getElementById('status2'), status3=document.getElementById('status3'), status4=document.getElementById('status4'), status5=document.getElementById('status5');

  stop1.classList.toggle('mastered',m1);
  status1.textContent=m1?'✓ MASTERED':'SIMULAN';

  if(m1){
    stop2.classList.remove('locked'); stop2.classList.add('available'); stop2.disabled=false;
    status2.textContent=m2?'✓ MASTERED':'BUKAS';
    stop2.classList.toggle('mastered',m2);
  }else{
    stop2.classList.add('locked'); stop2.classList.remove('available','mastered'); stop2.disabled=true;
    status2.textContent='🔒 80%';
  }

  if(m2){
    stop3.classList.remove('locked'); stop3.classList.add('available'); stop3.disabled=false;
    status3.textContent=m3?'✓ MASTERED':'BUKAS';
    stop3.classList.toggle('mastered',m3);
  }else{
    stop3.classList.add('locked'); stop3.classList.remove('available','mastered'); stop3.disabled=true;
    status3.textContent=m1?'🔒 80%':'🔒';
  }

  if(m3){
    stop4.classList.remove('locked'); stop4.classList.add('available'); stop4.disabled=false;
    status4.textContent=m4?'✓ MASTERED':'BUKAS';
    stop4.classList.toggle('mastered',m4);
  }else{
    stop4.classList.add('locked'); stop4.classList.remove('available','mastered'); stop4.disabled=true;
    status4.textContent=m2?'🔒 80%':'🔒';
  }

  if(m4){
    stop5.classList.remove('locked'); stop5.classList.add('available'); stop5.disabled=false;
    status5.textContent=m5?'✓ MASTERED':'BUKAS';
    stop5.classList.toggle('mastered',m5);
  }else{
    stop5.classList.add('locked'); stop5.classList.remove('available','mastered'); stop5.disabled=true;
    status5.textContent=m3?'🔒 80%':'🔒';
  }

  const resultsCard=document.getElementById('dashboardResultsCard');
  if(resultsCard) resultsCard.classList.toggle('hidden',!m5);

  const best1=Number(localStorage.getItem('kawil_m1_highest')||0);
  const best2=Number(localStorage.getItem('kawil_m2_highest')||0);
  const best3=Number(localStorage.getItem('kawil_m3_highest')||0);
  const best4=Number(localStorage.getItem('kawil_m4_highest')||0);
  const best5=Number(localStorage.getItem('kawil_m5_highest')||0);
  const bestEl=document.getElementById('bestScore');
  if(bestEl){
    const parts=[];
    if(best1) parts.push(`Modyul 1: ${best1}%`);
    if(best2) parts.push(`Modyul 2: ${best2}%`);
    if(best3) parts.push(`Modyul 3: ${best3}%`);
    if(best4) parts.push(`Modyul 4: ${best4}%`);
    if(best5) parts.push(`Modyul 5: ${best5}%`);
    bestEl.textContent=parts.length?parts.join(' • '):'Mastery target: 80% pataas';
  }
}

function startReadingTimer(){
  if(timerInterval) return;
  elapsedSeconds=0;
  timerStart=Date.now();
  const display=document.getElementById('timerDisplay');
  const startBtn=document.getElementById('startTimerBtn');
  const stopBtn=document.getElementById('stopTimerBtn');
  startBtn.disabled=true; stopBtn.disabled=false;
  document.getElementById('timerNote').textContent='Nagbibilang ang oras. Basahin nang malinaw at tuloy-tuloy.';
  timerInterval=setInterval(()=>{
    elapsedSeconds=Math.floor((Date.now()-timerStart)/1000);
    display.textContent=formatTime(elapsedSeconds);
  },250);
}

function stopReadingTimer(){
  if(!timerInterval) return;
  clearInterval(timerInterval); timerInterval=null;
  elapsedSeconds=Math.max(1,Math.floor((Date.now()-timerStart)/1000));
  localStorage.setItem('kawil_m2_time',String(elapsedSeconds));
  localStorage.setItem('kawil_m2_timed_done','true');
  document.getElementById('timerDisplay').textContent=formatTime(elapsedSeconds);
  document.getElementById('timerNote').textContent=`Natapos ang timed reading sa ${formatTime(elapsedSeconds)}. Maaari mo nang simulan ang hamon.`;
  document.getElementById('startTimerBtn').textContent='ULITIN ANG ORAS';
  document.getElementById('startTimerBtn').disabled=false;
  document.getElementById('stopTimerBtn').disabled=true;
  document.getElementById('startModule2Btn').disabled=false;
}

function restoreTimerState(){
  if(timerInterval){ clearInterval(timerInterval); timerInterval=null; }
  const done=localStorage.getItem('kawil_m2_timed_done')==='true';
  const secs=Number(localStorage.getItem('kawil_m2_time')||0);
  const display=document.getElementById('timerDisplay');
  const startBtn=document.getElementById('startTimerBtn');
  const stopBtn=document.getElementById('stopTimerBtn');
  const challenge=document.getElementById('startModule2Btn');
  if(!display) return;
  display.textContent=done?formatTime(secs):'00:00';
  startBtn.textContent=done?'ULITIN ANG ORAS':'SIMULAN ANG ORAS';
  startBtn.disabled=false; stopBtn.disabled=true; challenge.disabled=!done;
  document.getElementById('timerNote').textContent=done?`Huling timed reading: ${formatTime(secs)}. Maaari mo nang simulan ang hamon.`:'Tapusin muna ang timed reading bago mabuksan ang hamon.';
}

function formatTime(sec){
  const m=Math.floor(sec/60).toString().padStart(2,'0');
  const s=(sec%60).toString().padStart(2,'0');
  return `${m}:${s}`;
}

const storyText={
  m1:'Isang hapon, napansin ni Mika ang isang lumang kahon sa sulok ng silid-aklatan. Hindi ito karaniwang kahon dahil may maliit itong kandado at tila matagal nang hindi nabubuksan. Dahil sa kaniyang pag-uusisa, agad niya itong ipinakita sa kaniyang guro. Maam, kanino po kaya ito? tanong ni Mika. Sinuri ng guro ang kahon at nakita ang isang maliit na papel na nakasingit sa ilalim nito. Nakasaad doon ang isang pahiwatig tungkol sa isang aklat na matagal nang nawawala sa silid-aklatan. Naging masigasig si Mika sa paghahanap. Isa-isa niyang tiningnan ang mga istante at inayos ang mga aklat na nakakalat sa paligid. Maya-maya, napansin niya ang isang aklat na nakatago sa likod ng isang malaking diksyunaryo. Dahan-dahan niya itong kinuha. Sa unang pahina, nakita niya ang pangalan ng dating tagapangasiwa ng silid-aklatan. Mayroon ding maikling mensahe na nagsasabing ang aklat ay dapat pangalagaan at ipasa sa mga susunod na mag-aaral. Napangiti si Mika. Hindi man kayamanan ang kaniyang natagpuan, nakadama siya ng kagalakan dahil may natuklasan siyang bahagi ng kasaysayan ng kanilang paaralan.'
};

function playStoryAudio(audioId,key){
  const audio=document.getElementById(audioId);
  const btn=event && event.currentTarget ? event.currentTarget : null;
  const original=btn?btn.textContent:'▶ Pakinggan';
  if(!audio){ openStoryAudioPlaceholder(key); return; }

  const source=audio.querySelector('source');
  const src=source ? source.getAttribute('src') : '';
  if(!src){ openStoryAudioPlaceholder(key); return; }

  // Subukang i-play ang recorded audio. Kapag wala pa ang MP3, magpakita ng
  // maayos na placeholder sa halip na browser error/TTS.
  audio.play().then(()=>{
    if(btn) btn.textContent='⏸ Nagpe-play...';
    audio.onended=()=>{if(btn) btn.textContent=original;};
  }).catch(()=>{
    if(btn) btn.textContent=original;
    openStoryAudioPlaceholder(key);
  });
}

const storyAudioTitles={
  m1:'Ang Lihim sa Lumang Aklatan',
  m2:'Ang Munting Aklatan sa Pasilyo',
  m3:'Ang Proyektong Gulayan ng Baitang Pito',
  m4:'Ang Basang Payong sa Silid-Aralan',
  m5:'Ang Tahimik na Oras ng Pagbasa'
};
function openStoryAudioPlaceholder(key){
  const modal=document.getElementById('storyAudioModal');
  const title=document.getElementById('storyAudioTitle');
  if(!modal) return;
  if(title) title.textContent=storyAudioTitles[key]||'Pakinggan ang Kuwento';
  modal.classList.remove('hidden');
  document.body.style.overflow='hidden';
}
function closeStoryAudio(){
  const modal=document.getElementById('storyAudioModal');
  if(modal) modal.classList.add('hidden');
  document.body.style.overflow='';
}

document.addEventListener('visibilitychange',()=>{
  if(document.hidden){
    flushActiveTime();
    activeTimeStarted=null;
  }else if(activeTimeKey){
    activeTimeStarted=Date.now();
  }
});
window.addEventListener('beforeunload',()=>flushActiveTime());
document.addEventListener('DOMContentLoaded',()=>{
  updateDashboard(); restoreTimerState();
  const active=document.querySelector('.screen.active');
  if(active){
    const key=screenTimeKey(active.id);
    if(key!==undefined) setTrackedPage(key);
  }
});

document.addEventListener('DOMContentLoaded',restoreParticipant);

window.addEventListener('online',flushPendingSync);

// FINAL v13 — story video player. Add final MP4 files to /video later.
const storyVideos={
  m1:{title:'Ang Lihim sa Lumang Aklatan',src:'video/modyul1-kuwento.mp4'},
  m2:{title:'Ang Munting Aklatan sa Pasilyo',src:'video/modyul2-kuwento.mp4'},
  m3:{title:'Ang Proyektong Gulayan ng Baitang Pito',src:'video/modyul3-kuwento.mp4'},
  m4:{title:'Ang Basang Payong sa Silid-Aralan',src:'video/modyul4-kuwento.mp4'},
  m5:{title:'Ang Tahimik na Oras ng Pagbasa',src:'video/modyul5-kuwento.mp4'}
};
function openStoryVideo(key){
  const item=storyVideos[key];
  const modal=document.getElementById('storyVideoModal');
  const player=document.getElementById('storyVideoPlayer');
  const placeholder=document.getElementById('storyVideoPlaceholder');
  const title=document.getElementById('storyVideoTitle');
  if(!item||!modal||!player||!placeholder) return;
  title.textContent=item.title;
  modal.classList.remove('hidden');
  document.body.style.overflow='hidden';
  placeholder.classList.add('hidden');
  player.style.display='block';
  player.onerror=()=>{
    player.pause(); player.removeAttribute('src'); player.load();
    player.style.display='none'; placeholder.classList.remove('hidden');
  };
  player.src=item.src;
  player.load();
}
function closeStoryVideo(){
  const modal=document.getElementById('storyVideoModal');
  const player=document.getElementById('storyVideoPlayer');
  if(player){player.pause();player.removeAttribute('src');player.load();}
  if(modal) modal.classList.add('hidden');
  document.body.style.overflow='';
}
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeStoryVideo();});
