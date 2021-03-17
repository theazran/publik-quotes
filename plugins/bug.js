let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let username = conn.getName(who)

    let mentionedJid = [who]
    conn.sendFile(m.chat, `@${who.replace(/@.+/, '')}`, m)
  }

handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^modd$/i

handler.owner = false
module.exports = handler

