const Discord = require("discord.js");
const profiles = require("../models/profile.js");

module.exports.run = async (client, message, args, reply) => {
  const userProfile = await profiles.findOne({ id: message.author.id });
<<<<<<< HEAD
  if (!userProfile || userProfile.mod !== true && userProfile.admin !== true) return reply(`<:redTick:568885082321059865> You aren't allowed to perform this action.`);
=======
  if (!userProfile || userProfile.mod !== true && userProfile.admin !== true) return reply(`You are not allowed to perform this action.`);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c

  const userBots = await require("../models/bots.js").find({ approved: false });
  var embed = new Discord.MessageEmbed()
    .setAuthor(`Unverified Bots:`, message.author.displayAvatarURL({ format: "png", size: 128 }))
    .setColor("BLUE");

  if (userBots.length < 1) {
<<<<<<< HEAD
    embed.setDescription(`There isn't any bot pending verification.`);
=======
    embed.setDescription(`There aren't any bots pending verification.`);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
  } else {
    var bots = [];
    for (const bot of userBots) {
      bots.push({ name: bot.name, id: bot.id, prefix: bot.prefix, invite: bot.invite });
    }
<<<<<<< HEAD
    bots = bots.map(b => `[${b.name}](${b.invite}&guild_id=618096622559035392) (ID: ${b.id}) **Prefix:** \`${b.prefix}\``);
    embed.setDescription(`Bots pending verification:\n\n${bots.join(",\n")}\n=================\nShowing a total of ${userBots.length} bots.`);
=======
    bots = bots.map(b => `[${b.name}](${b.invite}) (ID: ${b.id}) **Prefix:** \`${b.prefix}\``);
    embed.setDescription(`Bots pending verification:\n\n${bots.join(",\n")}\n===\nShowing a total of **${userBots.length}** bots.`);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
  }
  reply(embed);
};

module.exports.help = {
  name: "queue"
};
