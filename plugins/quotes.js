let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// Font By MFarelS:V
let fontPath = 'src/font/Roboto-Light.ttf'
let namanya = 'src/font/Roboto-Bold.ttf'
let handler  = async function (m, { conn, args, text, sendMessage })  {

  let inputPath ='src/kertas/quotes.jpg'
  let outputPath = 'tmp/quotes.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })

  let [username, nickname, ...teks] = text.split('|')
  let aaa = (teks ||[]).join('|')
  // let teks = args.join ` `
 // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks, username}), m)
  spawn('convert', [
    inputPath,
        '-font',
    namanya,
    '-size',
    '100x100',
    '-pointsize',
    '22',
    '-interline-spacing',
    '1',
    '-annotate',
    '+26+745',
    hari,

    '-font',
    fontPath,
    '-size',
    '4x4',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+26+766',
    tgl ,
    '-font',
    fontPath,
    '-size',
    '4x4',
    '-pointsize',
    '20',
    '-interline-spacing',
    '1.5',
    '-annotate',
    '+150+340',
    aaa,
        '-font',
    namanya,
    '-size',
    '4x4',
    '-pointsize',
    '23',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+207+610',
    username,
    '-font',
    fontPath,
    '-size',
    '4x4',
    '-pointsize',
    '12',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+207+625',
    nickname,
    outputPath
  ])
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
  conn.sendFile(m.chat, outputPath, 'quotes.jpg', `_*Quotesmu akan di posting disini*_\n_*Instagram.com/publik.quotes*_`, m)
conn.fakeReply(m.chat, `Quotes by ${username} 
📑 ${nickname}
 
${kuot(global.capt)}

Jangan lupa follow
🏷️ @publik.quotes
🏷️ @publik.quotes
🏷️ @publik.quotes

${kuot(global.tagar)}

`, '0@s.whatsapp.net', '*Auto Post Instagram* - by M Asran')

 // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks, username}), m)
    
  })
}
handler.help = ['quotes'].map(v => v + ' _nama|username|teks_')
handler.tags = ['New Fitur']
handler.command = /^quotes|qts|lk$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler





// BY MFARELS NJEENK
// https://GitHub.com/MFarelS/



function kuot(list) {
  return list[Math.floor(list.length * Math.random())]
}
global.capt = [

"Yuk bikin quotesmu juga, gak sampai 10 detik langsung jadi gambar loh, kalau minat langsung DM aja ya :)",
"Bikin quotes kayak gini gak sampai 10 detik langsung jadi loh, yuk langsum DM aja ku beri tahu caranya",
"Taukah kamu, sekarang di whatsapp sudah bisa bikin quotes versi gambar, Minat? DM :D",
"Bikin quotes via whatsapp, untuk info dan caranya silahkan DM yah!"
]
global.tagar = [
 "#quotes #bucin #publikquotes #quotesbucin #buciners #motivasi #humor #bijak #katakat #quotesvisual #kuotesku",
 "#remaja #quotestagram #quotesindonesia #publikquotes #quotesdaily",
 "#publikquotes #lagibucin #quoteskeren #quotesbijak #bijak"
]