let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.DATABASE._data.users).length
  let old = Math.round(performance.now())
  await m.reply('*_CUALQUIER DUDA O AYUDA QUE NECESITES CONTACTEME CON EL SIGUIENTE LINK: wa.me/50497160165_*')
  let neww = Math.round(performance.now())
  conn.reply(m.chat, `
*_Hola a todos 👋🏻 ¡Estamos emocionados de anunciar nuestra nueva colaboración con Cafirexos  🤖 Ahora ya pueden tener su propio bot de *THE-MYSTIC-BOT-MD* en su plataforma en línea, permitiendo  que tus bots estén activos las 24/7. 💻_

_Te quería informarte que la instalación de estas versiones ha sido aprobada y ya está en pleno funcionamiento. Además, *los servidores son totalmente compatibles, lo que te permite elegir el tipo de inicio del bot según tus necesidades.* ¡Prepárate para una experiencia de usuario ininterrumpida y emocionante!_ 

🖥️ *Plataforma:*
https://dash.cafirexos.com/login

🧑🏻‍💻 *Cualquier Información entra a este grupo:*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ

🔮 *Canal:*
https://www.whatsapp.com/channel/0029Va8ZD6O3mFXxTPl1m13A _*`.trim(), m)
}
handler.help = ['infohost']
handler.tags = ['General']
handler.command = /^(infohost?)$/i

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
