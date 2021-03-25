let handler = async (m, { conn,text, subject }) => {
conn.query({
	json:["action", "invite", `${text.replace('https://chat.whatsapp.com/','')}`]
})
m.reply( `Berhasil Gabung ke grup`)
}
handler.command = /^join$/i
module.exports = handler


