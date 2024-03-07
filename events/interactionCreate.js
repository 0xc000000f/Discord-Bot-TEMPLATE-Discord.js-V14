// Importamos la clase Event de discord.js
const { Event } = require('discord.js');

// Creamos una subclase de Event llamada InteractionCreateEvent
class InteractionCreateEvent extends Event {
  // Definimos el constructor con los parámetros necesarios
  constructor(client) {
    super(client, {
      // El nombre del evento
      name: 'interactionCreate',
      // El tipo del evento, puede ser 'on' o 'once'
      type: 'on'
    });
  }

  // Definimos el método run, que se ejecuta cuando se dispara el evento
  async run(interaction) {
    // Verificamos si la interacción es un comando
    if (interaction.isCommand()) {
      // Obtenemos el nombre del comando
      const commandName = interaction.commandName;

      // Buscamos el comando en la colección de comandos del cliente
      const command = this.client.commands.get(commandName);

      // Si el comando existe, lo ejecutamos pasando la interacción como argumento
      if (command) {
        try {
          await command.run(interaction);
        } catch (error) {
          // Si ocurre un error, lo mostramos en la consola y respondemos a la interacción con un mensaje de error
          console.error(error);
          await interaction.reply({ content: 'Lo siento, ocurrió un error al ejecutar el comando', ephemeral: true });
        }
      }
    }
  }
}

// Exportamos la clase InteractionCreateEvent para usarla en otros archivos
module.exports = InteractionCreateEvent;
