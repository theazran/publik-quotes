let util = require('util')
let path = require('path')
let { spawn } = require('child_process')

// Font By MFarelS:V
let fontPath = 'src/font/Roboto-Light.ttf'
let namanya = 'src/font/Roboto-Bold.ttf'
let handler  = async function (m, { conn, args, text })  {

  // let [_, age, splitter, name] = text.match(Reg)
  let inputPath ='src/kertas/tweet.jpg'
  let outputPath = 'tmp/hasil.jpg'
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
    fontPath,
    '-size',
    '4x4',
    '-pointsize',
    '18',
    '-interline-spacing',
    '1',
    '-annotate',
    '+25+462',
    hari +[', '] +tgl+[' .Twitter Web App'] ,
    '-font',
    fontPath,
    '-size',
    '4x4',
    '-pointsize',
    '30',
    '-interline-spacing',
    '1.5',
    '-annotate',
    '+25+220',
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
    '+112+125',
    username,
    '-font',
    fontPath,
    '-size',
    '4x4',
    '-pointsize',
    '23',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+112+155',
    nickname,
    outputPath
  ])
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
    conn.sendFile(m.chat, outputPath, 'tweet.jpg', '_*New Fiture*_', m)
  })
}
handler.help = ['tweet'].map(v => v + ' _teks_')
handler.tags = ['New Fitur']
handler.command = /^tweet|tw$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

// BY MFARELS NJEENK
// https://GitHub.com/MFarelS/
