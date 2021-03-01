let handler = function (m) {
	let name = conn.getName(m.sender)
		let a = `
*PETUNJUK*

Hi kak *${name}*, silahkan kirim pesan dengan perintah berikut:

*.quotes Nama | Username | Kuotes kamu*

Quotesmu akan di upload otomatis disini:
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
