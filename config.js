import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['59177601773', '👑 Alba070503 - Creador 👑', true],
  ['59169082575', '💫 Mystic - Collaborator 1 💫', true],
  ['59165892573', '💫 Mystic - Collaborator 2 💫', true],
  ['51996089079', '💫 Mystic - Collaborator 3 💫', true],
  ['5218442286089', '💫 Mystic - Collaborator 4 💫', true],
  ['50246028932', '💫 Mystic - Collaborator 5 💫', true],
  ['5212412377467', '💫 Mystic - Collaborator 6 💫', true],
  ['5215517489568', '💫 Mystic - Rey Endymion 💫', false],
  ['59895555511', '💫 Mystic - Collaborator 8 💫', true],
  ['393518398856','💫 Mystic - Tester Fabri115💫', true],
  ['593968585283'],
  ['5219993404349'],
  ['5219991402134'],
  ['5492266466080'],
  ['5219996125657'],
  ['5218442114446'],
  ['59894808483'],
  ['593980586516'], 
  ['595975740803'],  
  ['5492266613038'],
  ['50497150165'],
  ['51906662557'],
  ['573183650526'], 
  ['5217441298510'], 
  ['5217294888993'],
  ['595992611272']
];

global.suittag = ['5219993404349'];
global.prems = ['51995386439'];

global.packname = 'NamiBot-MD';
global.author = 'By @Alba070503';
global.wm = 'NamiBot-MD';
global.titulowm = 'NamiBot-MD';
global.titulowm2 = 'NamiBot-MD';
global.igfg = 'NamiBot-MD';
global.wait = '*[ ⏳ ] Cargando...*';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

global.mods = [];
//⊱ ━━━━━.⋅ Versión | Nombre | cuentas ⋅.━━━━ ⊰

global.vs = "1.3"
global.vsJB = "2.5 (Beta)"

global.gt = "NamiBot-MD"
global.yt = "https://youtube.com/@Alba070503"
global.yt2 = "https://www.tiktok.com/@alba070503?_t=8izt99evT9C&_r=1"
global.ig = "https://www.instagram.com/Alba070503"
global.md = "https://github.com/Alba070503/Kumiko-MD"
global.fb = "https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04"

global.nna = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //CANAL UPDATE
global.nn2 = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Canal GataBot
global.nna2 = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Help
global.nn = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Grupo 1
global.nnn = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Grupo 2
global.nnnt = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Grupo 3
global.nnntt = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Grupo 4
global.nnnttt = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Grupo 5
global.nnnttt1 = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04'; //Grupo 6 COL
global.nnnttt2 = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Grupo 7 COL
global.nnnttt3 = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Grupo 8 COL
global.nnnttt4 = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //Grupo 9 COL
global.nnnttt5 = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04' //A.T.M.M
global.paypal = 'https://paypal.me/Alba070503'
global.asistencia = 'Wa.me/59177601773' //Dudas? escríbeme...

// ❰❰ API KEYS ❱❱
global.Key360 = ["GataDios"] // key Ephoto360
global.openai_key = 'sk-0' // Api New: https://platform.openai.com/account/api-keys 
global.openai_org_id = 'org-3' // Api New: https://platform.openai.com/account/org-settings */
global.keysZens = ["LuOlangNgentot", "c2459db922", "37CC845916", "6fb0eff124", "hdiiofficial", "fiktod", "BF39D349845E", "675e34de8a", "0b917b905e6f"]
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ["29d4b59a4aa687ca", "5LTV57azwaid7dXfz5fzJu", "cb15ed422c71a2fb", "5bd33b276d41d6b4", "HIRO", "kurrxd09", "ebb6251cc00f9c63"]
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ["5VC9rvNx", "cfALv5"]
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = "GataDios"
global.itsrose = ["4b146102c4d500809da9d1ff"]
global.baileys = "@whiskeysockets/baileys"

global.APIs = { 
xteam: 'https://api.xteam.xyz',
dzx: 'https://api.dhamzxploit.my.id',
lol: 'https://api.lolhuman.xyz',
violetics: 'https://violetics.pw',
neoxr: 'https://api.neoxr.my.id',
zenzapis: 'https://api.zahwazein.xyz',
akuari: 'https://api.akuari.my.id',
akuari2: 'https://apimu.my.id',	
fgmods: 'https://api.fgmods.xyz', 
botcahx: 'https://api.botcahx.biz.id',
ibeng: 'https://api.ibeng.tech/docs',	
rose: 'https://api.itsrose.site',
popcat : 'https://api.popcat.xyz',
xcoders : 'https://api-xcoders.site'
},
   
global.APIKeys = { 
'https://api.xteam.xyz': `${keysxteam}`,
'https://api.lolhuman.xyz': `${lolkeysapi}`,
'https://api.neoxr.my.id': `${keysneoxr}`,	
'https://violetics.pw': 'beta',
'https://api.zahwazein.xyz': `${keysxxx}`,
'https://api.fgmods.xyz': 'DRLg5kY7', 
'https://api-fgmods.ddns.net': 'fg-dylux',
'https://api.botcahx.biz.id': 'Admin',
'https://api.ibeng.tech/docs': 'tamvan',
'https://api.itsrose.site': 'Rs-Zeltoria',
'https://api-xcoders.site': 'Frieren'
}
// • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nNami - Bot`;
global.gt = 'NamiBot-MD';
global.mysticbot = 'NamiBot-MD';
global.md = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04';
global.mysticbot = 'https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04';
global.waitt = '*[ ⏳ ] Cargando...*';
global.waittt = '*[ ⏳ ] Cargando...*';
global.waitttt = '*[ ⏳ ] Cargando...*';
global.nomorown = '5219993404349';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
