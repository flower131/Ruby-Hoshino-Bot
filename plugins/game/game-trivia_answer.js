const handler = (m) => m;

handler.before = async function(m) {
    const id = m.chat;
    this.trivia = this.trivia ? this.trivia : {};

    // Si no hay una trivia activa en este chat, ignoramos
    if (!(id in this.trivia)) return true;
    
    // Si el mensaje no es una sola letra A, B, C o D, ignoramos
    if (!/^[a-dA-D]$/i.test(m.text)) return true;

    const trivia = this.trivia[id][1]; // Datos de la pregunta
    const msg = this.trivia[id][0];    // Mensaje original
    const letras = ['A', 'B', 'C', 'D'];
    const respuestaUsuario = m.text.trim().toUpperCase();
    const respuestaCorrecta = trivia.respuesta;
    const textoRespuesta = trivia.opciones[letras.indexOf(respuestaCorrecta)];
    
    const moneda = global.moneda || 'Zenis';

    if (respuestaUsuario === respuestaCorrecta) {
        // PREMIO: 500 XP y 100 Monedas
        if (global.db && global.db.data && global.db.data.users[m.sender]) {
            let user = global.db.data.users[m.sender];
            user.exp = (user.exp || 0) + 500000000;
            user.coin = (user.coin || 0) + 1000000000000000;
            user.bank = (user.bank || 0) + 100;
        }

        await this.reply(m.chat, `🎉 *¡RESPUESTA CORRECTA!* 🎉\n\n👤 *Usuario:* @${m.sender.split('@')[0]}\n✅ *La respuesta era:* ${respuestaCorrecta}) ${textoRespuesta}\n🎁 *Premio:* +500 XP y +100 ${moneda}`, m, { mentions: [m.sender] });
        
        // Limpiamos la trivia
        clearTimeout(this.trivia[id][3]);
        delete this.trivia[id];
    } else {
        // Si responde mal, avisamos (opcional, puedes quitar esto si prefieres que no diga nada)
        await this.reply(m.chat, `❌ *¡Respuesta Incorrecta!* ❌\nSigue intentando o espera a que termine el tiempo.`, m);
    }
    
    return true;
};

export default handler;
