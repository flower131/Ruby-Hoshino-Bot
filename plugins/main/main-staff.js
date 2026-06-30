let handler = async (m, { conn, command, usedPrefix }) => {
let img = './src/catalogo.jpg'
let staff = `ᥫ᭡ *EQUIPO DE AYUDANTES* ❀
✰ *Dueño* » Slow
✦ *Bot* » ׄ❀ׅᮢ໋۬۟   ׁ ᮫᩠𝗥ᥙ᜔᪲𝖻ֹ𝘺 𝐇֢ᩚᨵ̷̸ׁׅׅ𝗌𝗁𝗂ᮬ𝗇֟፝͡𝗈̷̸  ꫶֡ᰵ࡙🌸̵໋ׄᮬ͜✿֪
⚘ *Versión* » ${vs}
❖ *Libreria* » ${libreria} ${baileys}
> ✧ GitHub » sin información 

✰ *Colaborador 1* » Gilda 
✦ *Rol* » segunda dueña. 
> ✧ Github » sin información 

✰ *Colaborador 2* » Chan
✦ *Rol* » Soporte/ayudante, editor.
> ✧ Github » sin información 
`
await conn.sendFile(m.chat, img, 'yuki.jpg', staff.trim(), m)
}
  
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
