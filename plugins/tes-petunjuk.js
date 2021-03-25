let handler = async function (m, { text, usedPrefix }) {
  let name = conn.getName(m.sender)
  let usera = global.DATABASE._data.users[m.sender]

  if (usera.registered === false) {ptnjk = `*PETUNJUK*

Hi kak *${name}*, silahkan kirim pesan dengan perintah berikut:

*${usedPrefix}daftar Nama Lengkap#ig#lk/pr*

*lk* = _Laki-laki_
*pr* = _Perempuan_

Jika *belum mengerti* silahkan ketik *#admin* untuk meminta bantuan!
`}
  if (usera.registered === true) {ptnjk =`*PETUNJUK*

Hi kak *${name}*, silahkan kirim pesan dengan perintah berikut:

*${usedPrefix}quotes* _tulis quotesmu disini_
*${usedPrefix}kuotes* _tulis quotesmu disini_
*${usedPrefix}qts* _tulis quotesmu disini_
*${usedPrefix}q* _tulis quotesmu disini_

Jika *belum mengerti* silahkan ketik *#admin* untuk meminta bantuan!
` }

m.reply(ptnjk .trim())

}

handler.command = /^(petunjuk|tutor)$/i
handler.group = true
module.exports = handler

