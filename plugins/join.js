let handler = async (m, { conn,text, subject }) => {
	if (!text) throw 'Linknya mana?'
conn.query({
	json:["action", "invite", `${text.replace('https://chat.whatsapp.com/','')}`]
})
m.reply( `Berhasil Gabung ke grup`)
}
handler.owner = true
handler.command = /^join$/i
module.exports = handler


