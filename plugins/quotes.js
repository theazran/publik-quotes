let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// Font By MFarelS:V
let fontPath = 'src/font/Roboto-Light.ttf'
let namanya = 'src/font/Roboto-Bold.ttf'
let handler  = async function (m, { conn, args, text })  {

  // let [_, age, splitter, name] = text.match(Reg)
  let inputPath ='src/kertas/quotes.jpg'
  let outputPath = 'tmp/quotes.jpg'
  let d = new Date
  let tgl = d.toLocaleDateString('id-Id')
  let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })

  let [username, nickname, ...teks] = text.split('|')

  let aaa = (teks ||[]).join('|')
  // let teks = args.join ` `
  // conn.reply(m.chat, util.format({fontPath, inputPath, outputPath, tgl, hari, teks}), m)
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
  })
}
handler.help = ['quotes'].map(v => v + ' _nama|username|teks_')
handler.tags = ['New Fitur']
handler.command = /^quotes|qts$/i
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
