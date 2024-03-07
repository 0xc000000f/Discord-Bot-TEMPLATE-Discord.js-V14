// Importamos la clase Command de discord.js
const { Command } = require('discord.js');

// Creamos una subclase de Command llamada PingCommand
class PingCommand extends Command {
  // Definimos el constructor con los parámetros necesarios
  constructor(client) {
    super(client, {
      // El nombre del comando
      name: 'ping',
      // La descripción del comando
      description: 'Muestra la latencia del bot y de la API de Discord',
      // Las opciones del comando, como argumentos o subcomandos
      options: [],
      // La categoría del comando, para organizarlos mejor
      category: 'general',
      // El permiso necesario para usar el comando, puede ser un rol, un permiso o 'none'
      permission: 'none'
    });
  }

  // Definimos el método run, que se ejecuta cuando se usa el comando
  async run(interaction) {
    // Obtenemos el timestamp de la interacción
    const timestamp = interaction.createdTimestamp;

    // Obtenemos la latencia de la API de Discord
    const apiLatency = this.client.ws.ping;

    // Respondemos a la interacción con un mensaje que muestra las latencias
    await interaction.reply(`🏓 Pong!\nLatencia del bot: ${Date.now() - timestamp} ms\nLatencia de la API: ${apiLatency} ms`);
  }
}

// Exportamos la clase PingCommand para usarla en otros archivos
module.exports = PingCommand;
