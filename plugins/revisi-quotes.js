let PhoneNumber = require('awesome-phonenumber')
let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let fontPath = 'src/font/Roboto-Light.ttf'
let namanya = 'src/font/Roboto-Bold.ttf'
let handler = async (m, { conn, args, text, sendMessage, usedPrefix }) => {
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let xx = global.DATABASE.data.users[who]
  let username = conn.getName(who)
  let [a,...teks] = text.split('#')
  let aaa = (teks ||[]).join('#')
  let outputPath = 'tmp/quotes.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
  if (!aaa) return conn.reply(m.chat, `⚠️ Quotesnya mana?`, m)

  if (xx.jk =='pr')  
      {inputPath ='src/kertas/quotespr.jpg'}
  else if (xx.jk =='lk')
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
    xx.name.split` `.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join` `,
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
    '@'+xx.ig,
    outputPath
  ])
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
  conn.sendFile(m.chat, outputPath, 'quotes.jpg', `Quotes by ${xx.name.split` `.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join` `} 
📑 @${xx.ig}
 
${kuot(global.capt)}

Jangan lupa follow
🏷️ @publik.quotes

${kuot(global.tagar)}`, m)   
  })
}

handler.owner = true
handler.command = /^(revisi|r|buatin|untuk|for|)$/i
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
