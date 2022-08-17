import fs from 'fs'
import fetch from 'node-fetch'
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = ` 📚 *Wa'alaikumsalam*`
conn.send2ButtonDoc(m.chat, `${htki} ᴜ s ᴇ ʀ s ${htka}`, info, 'ℹ️ Sapa', '.tts id Halo apa kabar', 'ℹ️ Menu', '.menu', fpayment, adReply)
}
handler.customPrefix = /^(assalamualaikum|salam)$/i
handler.command = new RegExp

export default handler