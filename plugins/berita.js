const axios = require('axios')

let handler = async(m, { conn, text }) => {

    new Promise((resolve, reject) => {
        axios.get(`http://newsapi.org/v2/top-headlines?country=id&apiKey=80f4f25d68dd451c8fbd8894602575cf`)
            .then((res) => {
                conn.sendFile(m.chat, res.data.articles[0].urlToImage, 'text', `➸ *Penulis* : ${res.data.articles[0].author}\n\n➸ *Judul* : ${res.data.articles[0].title}\n\n➸ *Deskripsi* : ${res.data.articles[0].description}\n\n➸ *Link* : ${res.data.articles[0].url}`, m)
            })
            .catch(reject)
    })

}

handler.help = ['berita', 'news']
handler.tags = ['random']
handler.command = /^(berita|news)$/i
handler.owner = false
handler.mods = false
handler.register = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler