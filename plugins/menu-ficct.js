import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix:  p,   dirname, text, isPrems}) => {
  try {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;

 const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
  const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
  const {money, joincount} = global.db.data.users[m.sender];
  const {exp, limit, level, role} = global.db.data.users[m.sender];
  const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png');
  const fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': wm, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${wm},;;;\nFN:${wm},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 'jpegThumbnail': imagen1, thumbnail: imagen1 ,sendEphemeral: true}}};
    await conn.reply(m.chat, 'Hola Ahurita  se le enviara el menu. . .',m, { contextInfo:{ forwardingScore: 2022, isForwarded: true, externalAdReply: {title: 'SupportFicct-Bot  By @Alba070503', body: 'bienvenido', sourceUrl: global.md, thumbnail: await (await fetch(pp)).buffer() }}})
//m.react('🐺');
    await conn.sendMessage(m.chat, { react: { text: '👾', key: m.key } })
  let txt =`
╭═══〘 ⚡⚡⚡⚡⚡⚡⚡ 〙══╮
║    ◉— *SupportFicct-Bot* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║*𝗛ola, ${taguser} Bienvenido Al Menu Support-Bot⚡*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║⚡ *Creador:* *Alba070503*
║⚡ *Dueño:* *Support Ficct*
║⚡ *Fecha:* ${date}
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯

╭═══〘 ⚡⚡⚡⚡⚡⚡ 〙══╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
  Hola a Tod@s este bot se ha hecho con   la finalidad de información 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║ ⚡ #Recomendaciones
║ - Para ver recomendacion de Docente 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║ ⚡ #Numero
║ - Para ver los números oficiales de los grupos 
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║ ⚡ #Bickpack
║ - Para ver archivos de la materia 
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯`;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": '⚡ Support Ficct', "containsAutoReply": true, "mediaType": 1, "thumbnail": [imagen6,imagen1,imagen4].getRandom(), "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: fkon});
 // m.react('🐺');
  } catch {
    conn.reply(m.chat, '[⛔] 𝗙𝗮𝗹𝗹𝗼, 𝗘𝗹 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲𝗻𝗲 𝘂𝗻 𝗲𝗿𝗿𝗼𝗿 𝗽𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗿𝗲𝗽𝗼𝗿𝘁𝗮𝗹𝗼 𝗮𝗹 𝘀𝘁𝗮𝗳𝗳.', m);
  }
};
handler.help = ['menu'];
handler.tags = ['menu'];
handler.command = /^(menuficct|menú|COMANDOS|comandos)$/i;
handler.register = true
export default handler;
