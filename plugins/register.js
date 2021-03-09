let handler = async function (m, { text, usedPrefix }) {
  let usera = global.DATABASE._data.users[m.sender]
  if (usera.registered === true) throw `Anda sudah terdaftar\nMau daftar ulang? \nSilahkan ketik *${usedPrefix}unreg*` 
  let [name, ig, jk] = text.split('#')
  if (!name) throw 'Nama tidak boleh kosong'
  if (!ig) throw 'Instagram tidak boleh kosong'
  if (!jk) throw 'Jenis Kelamin tidak boleh kosong'
  if (name.length < 3) throw '_Nama kamu bisa lebih pendek lagi?_'
  if (name.length < 3) throw '_Nama kamu bisa lebih pendek lagi?_'
  if (ig.length < 5) throw '_Instagram minimal 5 karakter woi, jangan ngayal!_'
  if (ig.startsWith('@')) throw 'Instagram gak usah pake *@* kaka'
  if (jk.length > 2)  throw 'Jenis kelamin di singkat aja *lk* atau *pr*\n\nlk = _Laki-laki_\npr = _Perempuan_' 
  
  usera.name = name
  usera.ig = ig
  usera.jk = jk
  let d = new Date
  let locale = 'id'
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
  let week = d.toLocaleDateString(locale, { weekday: 'long' })
  usera.regTime = [time, hari, date]

  if (usera.jk == 'lk') {jns = 'Laki-laki'}
  else if (usera.jk == 'pr') {jns = 'Perempuan'}

  usera.registered = true
  m.reply(`
*Pendaftaran Berhasil*

Nama: *${name}*
Username: *@${ig}*
Jenis Kelamin: *${jns}*
*www.instagram.com/${ig}*

Silahkan kirim perintah dibawah ini untuk membuat Quotes:

*#quotes* _tulis quotesmu disini_
*#kuotes* _tulis quotesmu disini_
*#qts* _tulis quotesmu disini_
*#q* _tulis quotesmu disini_


\`\`\`${time}\`\`\`
*${hari}, ${date}*
`.trim())
}

handler.command = /^(df|daftar|reg(ister)?)$/i

module.exports = handler

