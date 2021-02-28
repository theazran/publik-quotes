let handler = async (m, { conn, text }) => {
  if (!text) throw 'Tidak ada teks'
  m.reply(text, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}
handler.help = ['tag _teks_']
handler.tags = ['tools']

handler.command = /^tag$/i

module.exports = handler
