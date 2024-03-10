let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('*_CUALQUIER DUDA O AYUDA QUE NECESITES CONTACTEME CON EL SIGUIENTE LINK: wa.me/14509001764_*')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
*_GRACIAS POR INTERESARTE EN INSTALAR THE SHADOW BROKERS - BOT_*

*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*

_VIDEO TUTORIAL DE INSTALACIÓN: https://youtu.be/dP8-aaHinBE_

_ARCHIVOS DEL BOT: En la despcripcion del video encuentras el enlace actualizado, link directo a mediafire_

_^‿^ REQUISITO PARA INSTALAR EL BOT ^‿^_
_( ͡° ͜ʖ ͡°) Termux_
_( ͡° ͜ʖ ͡°) Descomprimidor de archivos (recomiendo ZArchiver)_
_( ͡° ͜ʖ ͡°) 1.5 GB de memoria en el teléfono_
_( ͡° ͜ʖ ͡°) Un WhatsApp secundario_
_( ͡° ͜ʖ ͡°) 2 teléfonos o un 1 teléfono y una PC_

*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*

💥 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐈𝐍𝐒𝐓𝐀𝐋𝐀𝐂𝐈𝐎𝐍 💥
- pkg update && pkg upgrade
- pkg install git -y
- pkg install nodejs -y
- pkg install ffmpeg -y
- pkg install imagemagick -y
- termux-setup-storage
- cd storage/downloads/Shadow
- npm install
- npm install -g npm@8.1.4
- npm update
- npm start
° Escaneas el código QR tienes 30 segundos para hacerlo

*◄┢┅͜͡✇⟬↯ື ►ஜ۩💥۩ஜ◄ ↯ື⟭✇͜͡┅┧►*
`.trim(), m)
}
handler.help = ['instalarbot']
handler.tags = ['General']
handler.command = /^(instalarbot?)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
