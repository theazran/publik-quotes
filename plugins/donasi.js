let handler = async m => m.reply(`
□ *DONASI*
├ DANA, OVO, GOPAY
└─□ 085255646434\n
Semua donasi yang masuk akan digunakan untuk kepentingan dan kelancaran operasional BOT Ini.
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
