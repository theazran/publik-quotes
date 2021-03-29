
let handler = async (m, { conn, args, type }) => {

	entah = args.join(" ")
    conn.updateProfileName(entah).then(() => {
        m.reply(`Sukses mengubah nama ke ${entah}`)
    }).catch((err) => { m.reply(`Error: ${err}`) })
}
handler.help = [''].map(v => v + ' <>')
handler.tags = ['']
handler.command = /^(ubahnama)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler


