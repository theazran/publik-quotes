const { createHash } = require('crypto')
let handler = async function (m, { args, usedPrefix }) {
 
  let user = global.DATABASE._data.users[m.sender]
  if (!user.registered) return conn.reply(m.chat, `Anda belum terdaftar sebagai member, silahkan ketik perintah dibawah ini:

*${usedPrefix}daftar Nama Lengkap#ig#lk/pr*

*lk* = _Laki-laki_
*pr* = _Perempuan_
`, m)
  let sn = user.ig
  args[0] = sn
  user.registered = false
  m.reply(`Unreg berhasil!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

