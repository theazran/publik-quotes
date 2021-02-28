let handler = function (m) {

  this.sendContact(m.chat, '6285255646434', 'M ASRAN', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
