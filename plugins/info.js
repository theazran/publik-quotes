let { MessageType } = require('@adiwajshing/baileys')
let info = 'src/kertas/carbon.png'
let handler = async (m, { conn, text }) => {
// conn.sendFile(m.chat, info ,'info.jpg')

  let users = (await conn.groupMetadata(m.chat)).participants.map(u => u.jid)
  conn.sendMessage(m.chat,`*UPDATE FITUR*

Silahkan buka gambar di bawah untuk melihat update terbaru`, MessageType.extendedText, { contextInfo: { mentionedJid: users } })
  conn.sendFile(m.chat,info ,'info.png')
}
handler.help = ['']
handler.tags = ['']
handler.command = /^info$/i
handler.owner = false
handler.group = true 

module.exports = handler
