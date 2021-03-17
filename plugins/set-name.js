
                    const axios = require('axios')
let handler = async(m, { conn, text, args }) => {
	
	let entah = args.join('')
	conn.updateProfileName(entah).then(() => {
	    m.reply(`Sukses mengubah nama ke ${entah}`)
	}).catch((err) => { 
		m.reply(`Error: ${err}`) })

}

handler.help = ['set', 'news']
handler.tags = ['random']
handler.command = /^(setname|sett)$|/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler