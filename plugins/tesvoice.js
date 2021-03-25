
let handler = async (m, { conn }) => {
conn.sendFile(m.chat, 'src/mp3/bapak_kau.mp3', 'm.opus', null, m, true)
// conn.reply(m.chat,'filename')

}
handler.help = [''].map(v => v + ' <>')
handler.tags = ['']
handler.command = new RegExp
// handler.customPrefix = /thanks/i
handler.command = /^vn$/i
handler.owner = true
handler.mods = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler


