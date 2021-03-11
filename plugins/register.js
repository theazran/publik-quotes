let handler = async function (m, { text, usedPrefix }) {
  let usera = global.DATABASE._data.users[m.sender]
  if (usera.registered === true) throw `⚠️ Anda sudah terdaftar\nMau daftar ulang? \nSilahkan ketik *${usedPrefix}unreg*` 
  let pisah = '#'
  let [name, ig, jk] = text.split(pisah)
  if (!name) throw '⚠️ Nama tidak boleh kosong'
  if (!ig) throw '⚠️ Instagram tidak boleh kosong'
  if (!jk) throw '⚠️ Jenis Kelamin tidak boleh kosong'
  if (name.length < 3) throw '⚠️ Nama minimal 3 huruf!'
  if (name.length > 20) throw '⚠️ Nama maksimal 20 karakter termasuk spasi!'
  if (name.endsWith(' ')) throw '⚠️ Diakhir Namamu tidak boleh ada spasi'
  if (ig.length < 5) throw '⚠️ Username Instagram minimal 5 karakter!'
  if (ig.includes("@")) throw '⚠️ Instagram boleh pakai *@*'
  if (ig.includes(' ')) throw '⚠️ Instagram tidak boleh pakai spasi!'
  if (jk.includes(' ')) throw `⚠️ Tidak boleh pakai spasi setelah *${pisah}*`
  if (jk.length > 2)  throw '⚠️ Jenis kelamin di singkat aja *lk* atau *pr*\n\nlk = _Laki-laki_\npr = _Perempuan_' 
  
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

