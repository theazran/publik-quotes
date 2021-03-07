let handler = async function (m, { usedPrefix }) {
	let name = conn.getName(m.sender)
		let a = `
*PETUNJUK*

Hi kak *${name}*, silahkan kirim pesan dengan perintah berikut:

*${usedPrefix}daftar Nama Lengkap#ig#lk/pr*

*lk* = _Laki-laki_
*pr* = _Perempuan_


_*Instagram.com/publik-quotes*_
_*Instagram.com/publik-quotes*_
_*Instagram.com/publik-quotes*_
Jangan lupa di follow yak!
		` 
	    conn.fakeReply(m.chat, a,'0@s.whatsapp.net', `*Publik Quotes* - Verified`)
}
handler.group = true
handler.command = /^(tutor|petunjuk)$/i

module.exports = handler
