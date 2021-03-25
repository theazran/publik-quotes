let handler = async function (m, { text, usedPrefix }) {
  let u = global.DATABASE._data.users[m.sender]
  name = u.name 
  ig = u.ig 
  jk = u.jk 
  time = u.regTime
  if (u.jk == 'lk') {jns = 'Laki-laki'}
  else if (u.jk == 'pr') {jns = 'Perempuan'}
  if (u.registered === true) return conn.reply(m.chat,`✅ Selamat, Anda sudah terdaftar!

*Nama: ${name}*
*Instagram: @${ig}*
*Jenis Kelamin: ${jns}*
_Terdaftar Pada_
${time}

Jangan lupa follow ya
Instagram.com/publik.quotes
` )
else if (u.registered === false) throw `⚠️ Maaf Anda belum terdaftar!
Silahkan ketik perintah dibawah ini:

*#daftar Nama#usernameig#lk/pr*

*lk* = _Laki-laki_
*pr* = _Perempuan_

Jika *belum mengerti* silahkan ketik *#admin* untuk meminta bantuan!
`
  }

handler.command = /^me|profile$/i
handler.group = true
module.exports = handler