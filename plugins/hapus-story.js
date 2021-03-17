let handler = async (m, { conn }) => {
let jid = m.key.remoteJid
conn.loadAllMessages('status@broadcast', m => {
if (m.key.fromMe)
conn.deleteMessage('status@broadcast', m.key)})
conn.reply(m.chat, 'Story Berhasil dihapus', m)
}
handler.help = [''].map(v => v + ' <>')
handler.tags = ['']
handler.command = /^(hapus)$/i
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



