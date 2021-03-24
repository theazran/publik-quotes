let handler = async (m, { conn,text }) => {
conn.query({
	json:["action", "invite", `${text}`]
})
m.reply( `Berhasil Gabung ke grup, dengan code *${text}*`)
}
handler.help = [''].map(v => v + ' <>')
handler.tags = ['']
handler.command = /^join$/i
handler.owner = false
handler.mods = false


handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler


