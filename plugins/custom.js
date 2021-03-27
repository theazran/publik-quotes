let handler = async (m, { conn }) => {
  conn.reply(m.chat, 'Waalaikumsalam', m)
}
handler.help = [''].map(v => v + ' <>')
handler.tags = ['']
handler.customPrefix = /^(assalamualaikum)$/i
handler.command = /(?:)/i
handler.mods = false
handler.register = true
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

