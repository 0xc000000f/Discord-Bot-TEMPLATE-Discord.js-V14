// Importamos el módulo fs para leer los archivos
const fs = require('fs');

// Creamos una función para cargar los comandos desde la carpeta commands
function loadCommands(client) {
  // Leemos los archivos de la carpeta commands
  const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

  // Recorremos cada archivo
  for (const file of commandFiles) {
    // Obtenemos el nombre del archivo sin la extensión
    const commandName = file.split('.')[0];

    // Importamos el archivo como un módulo
    const commandModule = require(`../commands/${file}`);

    // Creamos una instancia de la clase del comando
    const command = new commandModule(client);

    // Añadimos el comando a la colección de comandos del cliente
    client.commands.set(commandName, command);

    // Registramos el comando en el portal de desarrolladores de Discord
    // Usamos el método setApplicationCommands para registrar todos los comandos a la vez
    // Pasamos el ID de la aplicación del bot y un array de datos de los comandos
    client.application.setApplicationCommands(client.application.id, client.commands.map(c => c.toJSON()));
  }
}

// Exportamos la función loadCommands para usarla en otros archivos
module.exports = loadCommands;
