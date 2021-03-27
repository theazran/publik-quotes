let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
let namanya = 'src/font/Roboto-Bold.ttf'
let handler = async (m, { conn }) => {
  let inputPath = 'src/kertas/puasa.jpg'
  let outputPath = 'tmp/puasa.jpg'

let d = new Date(new Date('00:00:10 13 April 2021') - new Date)
let text = util.format('%s', d.getUTCDate()-1)
// conn.reply(m.chat, text, m)

spawn('convert', [
    inputPath,
    '-font',
    namanya,
    '-size',
    '4x4',
    '-fill',
    '#fda51a',
    '-pointsize',
    '450',
    '-interline-spacing',
    '-7.5',
    '-annotate',
    '+280+995',
    text,
    outputPath
  ])
  .on('error', e => conn.reply(m.chat, util.format(e), m))
  .on('exit', () => {
  conn.sendFile(m.chat, outputPath, m)   
  })
}
handler.help = [''].map(v => v + ' <>')
handler.tags = ['']
handler.command = /^(ramadhan|puasa)$/i
handler.owner = false
handler.mods = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler


