# Bot semi-avanzado en discord.js v14

Este es un proyecto de un bot semi-avanzado en discord.js v14, creado con la ayuda de Yukisuhii

## ¿Qué hace el bot?

El bot tiene las siguientes características:

- Usa la clase Command y la clase Event de discord.js para crear comandos y eventos personalizados.
- Usa el método setApplicationCommands para registrar los comandos en el portal de desarrolladores de Discord.
- Usa el método reply para responder a las interacciones con mensajes.
- Usa el método fromArray para convertir un array de strings en un bitfield de intenciones.
- Usa el archivo .env para almacenar el token del bot y otras variables de entorno.
- Tiene un comando de ping que muestra la latencia del bot y de la API de Discord.

## ¿Cómo usar el bot?

Para usar el bot, necesitas seguir estos pasos:

- Clonar o descargar este repositorio en tu computadora.
- Instalar node.js y discord.js en tu computadora.
- Crear una aplicación de bot en el portal de desarrolladores de Discord y obtener el token y el ID del bot.
- Generar una URL de invitación para añadir el bot a tu servidor de prueba.
- Editar el archivo .env y poner el token del bot y otras variables de entorno que quieras usar.
- Ejecutar el comando `node index.js` para iniciar el bot.
- Probar el bot en tu servidor de Discord y verificar que funciona correctamente.

## ¿Cómo crear más comandos y eventos?

Para crear más comandos y eventos para el bot, necesitas seguir estos pasos:

- Crear un archivo .js en la carpeta commands o en la carpeta events, según el tipo de estructura que quieras crear.
- Importar la clase Command o la clase Event de discord.js en el archivo.
- Crear una subclase de Command o de Event con el nombre que quieras darle a la estructura.
- Definir el constructor con los parámetros necesarios, como el nombre, la descripción, las opciones, la categoría, el permiso, el tipo, etc.
- Definir el método run, que se ejecuta cuando se usa el comando o se dispara el evento, y escribir el código que quieras que haga la estructura.
- Exportar la clase que has creado para usarla en otros archivos.

## Créditos

Este proyecto fue creado con la ayuda de la documentación oficial de discord.js
