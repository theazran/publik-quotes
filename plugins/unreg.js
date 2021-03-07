const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  // if (!args[0]) throw '_Username instagram tidak boleh kosong!_'
  let user = global.DATABASE._data.users[m.sender]
  let sn = user.ig
  // if (args[0] !== sn) throw '_Username instagram salah_'
  // if (args[0]= sn) throw '_Username instagram salah_'
  args[0] = sn
  user.registered = false
  m.reply(`Unreg berhasil!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <SN|SERIAL NUMBER>')
handler.tags = ['exp']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

