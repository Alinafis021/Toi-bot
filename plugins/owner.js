import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/21281274130
*instagram:*\ninstagram.com/alinafis0

*youtube:*\nyoutube.com/

*facebook page:*\nwww.facebook.com/

*script bot :* github.com/Alinafis021 

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
