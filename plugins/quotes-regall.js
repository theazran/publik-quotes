let PhoneNumber = require('awesome-phonenumber')
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

let fontPath = 'src/font/Roboto-Light.ttf'
let namanya = 'src/font/Roboto-Bold.ttf'

  let handler  = async function (m, { conn, args, text, sendMessage, usedPrefix })  {
  let usera = global.DATABASE._data.users[m.sender]
  let outputPath = 'tmp/quotes.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  let teks = args.join` `
  if (!usera.registered) throw `⚠️ Anda belum terdaftar sebagai member, silahkan ketik perintah dibawah ini:

*${usedPrefix}daftar Nama Lengkap#ig#lk/pr*

*lk* = _Laki-laki_
*pr* = _Perempuan_
`
  if (usera.jk == 'lk') {jns = `Kaka ${usera.name} Ganteng`}
  else if (usera.jk == 'pr') {jns = `Kaka ${usera.name} yang Cantik`}
  if (!text) return conn.reply(m.chat, `⚠️ Quotesnya mana ${jns}?`, m)

  if (text.length < 10) return conn.reply(m.chat, `⚠️ Hei ${jns}, niat gak sih bikin Quotes? Pendek bet dah`, m) 
  if (text.length > 180) return conn.reply(m.chat, `⚠️ Hei ${jns} dan baik hati, Ada yang lebih panjang gak?`, m) 

  if (usera.jk =='pr')  
      {inputPath ='src/kertas/quotespr.jpg'}
  else if (usera.jk =='lk')
      {inputPath ='src/kertas/quotes.jpg'}


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
    '100x150',
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
    text,
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
    usera.name,
    '-font',
    fontPath,
    '-size',
    '4x4',
    '-pointsize',
    '12',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+207+627',
    '@'+usera.ig,
    outputPath
  ])
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
  conn.sendFile(m.chat, outputPath, 'quotes.jpg', `Quotes by ${usera.name} 
📑 @${usera.ig}
 
${kuot(global.capt)}

Jangan lupa follow
🏷️ @publik.quotes
🏷️ @publik.quotes
🏷️ @publik.quotes

${kuot(global.tagar)}`, m)   
  })
}
handler.help = ['lk'].map(v => v + ' _Kuotes_')
handler.tags = ['New Fitur']
handler.command = /^lk|qtslk|quoteslk|qts|kuotes|q|quotes|qt$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


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
 "#quotes #bucin #publikquotes #quotesbucin #buciners #motivasi #humor #bijak #katakata #quotesvisual #kuotesku",
 "#remaja #quotestagram #quotesindonesia #publikquotes #quotesdaily",
 "#publikquotes #lagibucin #quoteskeren #quotesbijak #bijak",
 "#storywa #hijrah #instagram #plus62"
]



