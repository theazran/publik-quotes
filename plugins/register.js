let handler = async function (m, { text, usedPrefix }) {
  let usera = global.DATABASE._data.users[m.sender]
  if (usera.registered === true) throw `⚠️ Anda sudah terdaftar\nMau daftar ulang? \nSilahkan ketik *${usedPrefix}unreg*` 
  let pisah = '#'
  let daftarkan = '\n\n_Contoh:_\n*#daftar M Asran#theazran_#lk*\n*#daftar Putri#si_putri#pr*'

  let [name, ig, jk] = text.split(pisah)
  if (!name) throw `⚠️ Nama tidak boleh kosong${daftarkan}`
  if (!ig) throw `⚠️ Instagram tidak boleh kosong${daftarkan}`
  if (!jk) throw `⚠️ Jenis Kelamin tidak boleh kosong${daftarkan}`
  if (name.length < 3) throw `⚠️ Nama minimal 3 huruf!${daftarkan}`
  if (name.length > 20) throw `⚠️ Nama maksimal 20 karakter termasuk spasi!${daftarkan}`
  if (name.endsWith(' ')) throw `⚠️ Diakhir Namamu tidak boleh ada spasi${daftarkan}`
  if (ig.length < 5) throw `⚠️ Username Instagram minimal 5 karakter!${daftarkan}`
  if (ig.includes("@")) throw `⚠️ Instagram boleh pakai *@*${daftarkan}`
  if (ig.includes(' ')) throw `⚠️ Instagram tidak boleh pakai spasi!${daftarkan}`
  if (jk.includes(' ')) throw `⚠️ Tidak boleh pakai spasi setelah *${pisah}*${daftarkan}`
  if (jk.length > 2)  throw `⚠️ Jenis kelamin di singkat aja *lk* atau *pr*\n\nlk = _Laki-laki_\npr = _Perempuan_${daftarkan}`
  
  usera.name = name
  usera.ig = ig.toLowerCase()
  usera.jk = jk.toLowerCase()
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

  if (usera.jk == 'lk') {jenkel = 'Laki-laki'}
  else if (usera.jk == 'pr') {jenkel = 'Perempuan'}

  usera.registered = true
  m.reply(`
*✅ Pendaftaran Berhasil*

Nama: *${name}*
Username: *@${ig.toLowerCase()}*
Jenis Kelamin: *${jenkel}*
*www.instagram.com/${ig.toLowerCase()}*

Silahkan kirim perintah dibawah ini untuk membuat Quotes:

*#quotes* _tulis quotesmu disini_
*#kuotes* _tulis quotesmu disini_
*#qts* _tulis quotesmu disini_
*#q* _tulis quotesmu disini_

Jika *tidak mengerti* silahkan ketik *#admin* untuk meminta bantuan!

\`\`\`${time}\`\`\`
*${hari}, ${date}*
`.trim())
}

handler.command = /^(df|daftar|reg(ister)?)$/i
handler.group = true
module.exports = handler

