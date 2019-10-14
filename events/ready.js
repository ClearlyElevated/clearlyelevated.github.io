const Discord = require("discord.js"); // eslint-disable-line no-unused-vars
const dashboard = require("../dashboard/index.js");

exports.run = async (client) => {
<<<<<<< HEAD
  console.log(`${client.user.username} is ready!`);
=======
  console.log(`Bot client is ready, starting the list..`);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
  dashboard(client);
  client.emit("updatePresence");
};
