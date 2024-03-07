// Importamos la clase Event de discord.js
const { Event } = require('discord.js');

// Creamos una subclase de Event llamada ReadyEvent
class ReadyEvent extends Event {
  // Definimos el constructor con los parámetros necesarios
  constructor(client) {
    super(client, {
      // El nombre del evento
      name: 'ready',
      // El tipo del evento, puede ser 'on' o 'once'
      type: 'once'
    });
  }

  // Definimos el método run, que se ejecuta cuando se dispara el evento
  async run() {
    // Mostramos un mensaje en la consola indicando que el bot está en línea
    console.log(`El bot ${this.client.user.tag} está en línea`);

    // Establecemos el estado del bot, como el juego o la actividad que está realizando
    this.client.user.setActivity('ser un bot semi-avanzado', { type: 'PLAYING' });
  }
}

// Exportamos la clase ReadyEvent para usarla en otros archivos
module.exports = ReadyEvent;
