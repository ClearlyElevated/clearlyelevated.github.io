const Discord = require("discord.js");
const bots = require("../models/bots");
const profiles = require("../models/profile");

module.exports.run = async (client, message, args, reply) => {

  const userProfile = await profiles.findOne({ id: message.author.id });
<<<<<<< HEAD
  if (!userProfile || userProfile.admin !== true) return reply(`You aren't allowed to perform this action.`);
  var bot = message.mentions.users.first() || { id: args[0] };
  if (bot) bot = bot.id;
  if (!bot) return reply("Please specify a bot to set a vanity URL for.");
  if (!args[1]) return  reply(` Please specify a vanity URL.`)
=======
  if (!userProfile || userProfile.admin !== true) return reply(`Your are not allowed to perform this action.`);
  var bot = message.mentions.users.first() || { id: args[0] };
  if (bot) bot = bot.id;
  if (!bot) return reply("Please specify a bot to set a vanity URL for.");
  if (!args[1]) return  reply(`Please specify a vanity URL.`)
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
  if (args[1].length > 30 ) return reply(`The vanity URL can have a maximum of 30 characters.`)
  if (args[2]) return reply(`The vanity URL should be one string (without spaces).`)
  await bots.findOne({ id: bot }, async (err, res) => {
    if (err) console.log(err);
    if (!res) return reply(`The specified bot was not found.`);
    res.vanityUrl = args[1];
    await res.save().catch(e => console.log(e));
<<<<<<< HEAD
    reply(`The vanity URL has been set to: \nhttps://discordhouse.tk/bot/${args[1]}`)
   
  });


=======
    reply(`The vanity URL has been set to: \`${args[1]}\``)
  });
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
};

module.exports.help = {
  name: "vanity"
};
