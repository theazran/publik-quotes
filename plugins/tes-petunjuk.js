let handler = async function (m, { text, usedPrefix }) {
  let name = conn.getName(m.sender)
  let usera = global.DATABASE._data.users[m.sender]

  if (usera.registered === false) {ptnjk = `*PETUNJUK*

Hi kak *${name}*, silahkan kirim pesan dengan perintah berikut:

*${usedPrefix}daftar Nama Lengkap#ig#lk/pr*

*lk* = _Laki-laki_
*pr* = _Perempuan_

Jika belum mengerti silahkan hubungi salah satu admin group ini
`}
  if (usera.registered === true) {ptnjk = ''}

m.reply(ptnjk .trim())

}

handler.command = /^(tess|tt)$/i
handler.group = true
module.exports = handler

