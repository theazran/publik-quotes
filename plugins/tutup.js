

let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, 'Maaf, menu sedang error', m)
  if (text = 'tutup') {
  conn.groupSettingChange(m.chat, GroupSettingChange.messageSend, true)
	}
}
handler.help = [''].map(v => v + ' <>')
handler.tags = ['']
handler.command = /^(grup)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler


