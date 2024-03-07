import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, '𝗘𝗻𝘃𝗶𝗮𝗻𝗱𝗼 𝗺𝗲𝗻𝘂📍. . .',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'Sigueme En Mis Redes Sociales', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '💙', key: m.key } })
  let txt =`╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║ Hola ${taguser} Bienvenido Al FICCT MENU Aqui encontraras Sobre Relacionado Sobre Malla Curricular y Recomendaciones De Maestro De Oferta 
║ Este Bot Fue Creado Por Alba070503 Sigueme En Mis Redes Sociales (Redes)
║*Numero*: *wa.me/59177601773*
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║ Tienes Que Eligir Con Cual Quieres Comenzar 
(⁠・⁠∀⁠・⁠)
║#Malla Curricular
║#Recomendaciones De Maestro 
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '☆𝙽𝚊𝚖𝚒𝙱𝚘𝚝-𝙼𝙳 ☆', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.md, "sourceUrl": https://whatsapp.com/channel/0029VaAN15BJP21BYCJ3tH04}}}, {quoted: fkon});
 // m.react('🐺');
  } catch {
    conn.reply(m.chat, '[⛔] Error En El menu Comuniquese Con El Creador .', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuficct|Ficct)$/i;
export default handler;
