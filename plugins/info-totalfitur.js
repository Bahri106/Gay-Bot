
import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, text, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length
let tqto = `${wm}

${cmenut}
${cmenub} *🔖 FITUR :* ${totalf}
${cmenuf}

_Jangan di spam ntar erorr_
(. ❛ ᴗ ❛.)
${cmenua}`
conn.sendButton(m.chat, tqto, author, await(await fetch(hwaifu.getRandom())).buffer(), [['🎀 Menu', '/menu']], m, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: {
          externalAdReply :{
    mediaUrl: sig,
    mediaType: 2,
    description: wm, 
    title: '👋 Hai, ' + name + ' ' + ucapan,
    body: botdate,
    thumbnail: await(await fetch(pp)).buffer(),
    sourceUrl: sig
     }}
  })
}
handler.help = ['totalfitur']
handler.tags = ['main','info']
handler.command = /^(feature|totalfitur)$/i
export default handler
