// Importamos el archivo .env para acceder al token del bot y otras variables
require('dotenv').config();

// Importamos la clase Client y las constantes de discord.js
const { Client, Intents } = require('discord.js');

// Creamos un objeto cliente con las intenciones necesarias
// Usamos el método fromArray para convertir un array de strings en un bitfield de intenciones
const client = new Client({ intents: Intents.fromArray(['GUILDS', 'GUILD_MESSAGES']) });

// Importamos las funciones de cargar los comandos y los eventos
const loadCommands = require('./functions/loadCommands');
const loadEvents = require('./functions/loadEvents');

// Cargamos los comandos desde la carpeta commands y los registramos en el portal de desarrolladores de Discord
loadCommands(client);

// Cargamos los eventos desde la carpeta events y los asignamos al cliente
loadEvents(client);

// Iniciamos sesión con el bot usando el token
client.login(process.env.TOKEN);
