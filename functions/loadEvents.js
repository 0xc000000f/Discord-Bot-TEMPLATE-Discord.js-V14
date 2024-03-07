// Importamos el módulo fs para leer los archivos
const fs = require('fs');

// Creamos una función para cargar los eventos desde la carpeta events
function loadEvents(client) {
  // Leemos los archivos de la carpeta events
  const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

  // Recorremos cada archivo
  for (const file of eventFiles) {
    // Obtenemos el nombre del archivo sin la extensión
    const eventName = file.split('.')[0];

    // Importamos el archivo como un módulo
    const eventModule = require(`../events/${file}`);

    // Creamos una instancia de la clase del evento
    const event = new eventModule(client);

    // Asignamos el evento al cliente, usando el tipo y el nombre del evento
    clientevent.type => event.run(...args));
  }
}

// Exportamos la función loadEvents para usarla en otros archivos
module.exports = loadEvents;
