// let fetch = require('node-fetch')
// let handler = async (m, { conn, args }) => {
//   // if (!args[0]) throw 'Uhm...username nya mana?'
//   let { name, limit, exp, lastclaim, registered, regTime, age, jk, ig } = global.DATABASE.data.users[m.sender]

//   let res = await fetch(global.API('xteam', '/dl/igstalk', {
//     nama: `${ig}`
//   }, 'APIKEY'))
//   let json = await res.json()
//   if (res.status != 200) throw json
//   if (json.result.error) throw json.result.message
//   let {
//     full_name,
//     username,
//     is_verified,
//     media_count,
//     follower_count,
//     following_count,
//     biography,
//     external_url,
//     profile_pic_url,
//     hd_profile_pic_url_info,
//     is_private,
    
//   } = json.result.user
//   m.reply(JSON.stringify(json.result.user, null, 1))
//   let pp = hd_profile_pic_url_info.url || profile_pic_url
//   let caption = `
// POST: *${media_count}* 
// PENGIKUT: *${follower_count}* Orang
// MENGIKUTI: *${following_count}* Orang
// instagram.com/${username}

// `.trim()
//   // if (pp) conn.sendFile(m.chat, pp, 'ppig.jpg', caption, m)
// await conn.fakeReply(m.chat, caption,'0@s.whatsapp.net', `${full_name} - *@${username}*` , 'status@broadcast')

// // conn.reply(m.chat, full_name + username, m)

// }


// handler.command = /^(myig)$/i

// module.exports = handler