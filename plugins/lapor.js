let handler = async(m, { conn, text, getName }) => {
  let u = global.DATABASE._data.users[m.sender]
  let { registered, regTime, name } = global.DATABASE.data.users[m.sender]
  let nama = conn.getName(m.sender).replace(' ','%20')
  let spasi = name.replace(' ','%20')


if (u.registered === true) {txt = 'BIKIN QUOTES'}
else if (u.registered === false)  {txt = "MENDAFTAR"}
	let bantudaftar = `?text=Hai%20kak%20*${nama.replace(' ','%20')}*,%20Silahkan%20tulis%20perintah%20dibawah%20ini%20dan%20isi%20sesuai%20data%20kamu%20yah%0A%0A%23Daftar%20Nama%23instagram%23lk%0A%0A_Contoh_%3A%0A%23Daftar%20Ekaa%23ekharmdhnii%23pr%0A%23Daftar%20Apriajis%23apriajis30%23lk%0A%0ASilahkan%20dicoba%20dulu%20digrup%20kak%2C%20kalau%20belum%20paham%20silahkan%20hubungi%20saya%20lagi%20ya%20%3A)`
	let bantuquotes = `?text=Hai%20kak%20*${spasi.replace(' ','%20')}*,Silahkan%20kirim%20perintah%20dibawah%20ini%20untuk%20membuat%20Quotes%3A%0A%0A*%23quotes*%20_tulis%20quotesmu%20disini_%0A%0A*Contoh*%3A%0A%23quotes%20Belajarlah%20rendah%20hati%2C%20%0Arendahkan%20hatimu%20serendah-rendahnya%20%0Ahingga%20tidak%20ada%20seorangpun%20%0Ayang%20bisa%20merendahkanmu.%0A%0A*NOTE*%3A%0A-%20Max%20perbaris%2035%20huruf%20termasuk%20spasi%0A-%20Max%207%20baris%0A-%20Supaya%20rapih%20dan%20tidak%20nyebrang%20kolom%20harap%20di%20enter%20dan%20perhatikan%20juga%20intonasi%20quotes%0A-%20Quotes%20yang%20tidak%20rapih%20*tidak*%20akan%20diposting%20di%20ig%20Official%20*%40publik.quotes*%0A%0AJangan%20lupa%20follow%20ya!%0AInstagram.com%2Fpublik.quotes`
    var nomor = m.sender
    const laporan = `*「 BANTU ${txt}」*\n\n*KLIK UNTUK MEMBANTU*\nwa.me/${nomor.split("@s.whatsapp.net")[0]}${registered ? `${bantuquotes}` : `${bantudaftar}`}`
    var j = moderator(global.moderatorku)+'@s.whatsapp.net'
    // let namagrup = this.getName(m.key.remoteJid)
	m.reply(laporan, j)
    conn.reply(m.chat, `🕘 Mohon sabar menunggu, Admin group segera menghubungi Kamu!`, m)
}
handler.command = /^admin$/i
handler.fail = null
module.exports = handler

function moderator(list) {
  return list[Math.floor(list.length * Math.random())]
}
global.moderatorku = [
"6285340666252",
"6285341866544",
// "6285756889788"

]