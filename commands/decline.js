const Discord = require("discord.js");
const bots = require("../models/bots");
const profiles = require("../models/profile");

module.exports.run = async (client, message, args, reply) => {
  const userProfile = await profiles.findOne({ id: message.author.id });
  if (!userProfile || userProfile.mod !== true && userProfile.admin !== true) return reply(`You can't do this.`);

  var bot = message.mentions.users.first() || { id: args[0] };
  if (bot) bot = bot.id;

  const reason = args.slice(1).join(" ");
<<<<<<< HEAD
  if (!bot) return reply("<:redTick:568885082321059865> Please specify a bot to reject.");
  if (!reason) return reply("<:redTick:568885082321059865> Please specify a reason for the rejection.");

  const bot1 = await bots.findOne({ id: bot });
  await bots.findOneAndDelete({ id: bot });
  
  if (!bot1) return reply("<:redTick:568885082321059865> The specified bot was not found in the queue.")
=======
  if (!bot) return reply("Please specify a bot to reject.");
  if (!reason) return reply("Please specify a reason for the rejection.");

  const bot1 = await bots.findOne({ id: bot });
  await bots.findOneAndDelete({ id: bot });

  if (!bot1) return reply("The specified bot was not found in the queue.")
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c

  const bt = await client.users.fetch(bot1.id);

  var allOwners = bot1.owners;
  allOwners.unshift(bot1.mainOwner);
  allOwners = allOwners.map(u => `<@${u}>`);

<<<<<<< HEAD
  client.channels.get("561622522798407740").send(`<@${bot}> by ${allOwners.join(" ")} has been rejected by ${message.author}.`);
  client.channels.get("561659766917562368").send(`<@${bot}> by ${allOwners.join(" ")} has been rejected by ${message.author}.`);
=======
  client.channels.get(client.config.channels.declineLogsChannel).send(`<@${bot}> by ${allOwners.join(" ")} has been rejected by ${message.author}.`);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c

  const declineEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Bot Rejected")
    .setDescription(`**Bot**: ${bt.tag} (ID: ${bt.id})\n**Moderator**: ${message.author.tag} (ID: ${message.author.id})\n**Reason**: ${reason}`)
    .setTimestamp();
<<<<<<< HEAD
  client.channels.get("560890986390224897").send(declineEmbed);
  client.channels.get("561660098678620161").send(declineEmbed);
  const user = client.users.get(bot1.mainOwner);
  if (user) user.send(`Your bot <@${bot}> has been rejected by ${message.author.tag}.`);
  reply("<a:aRedTick:568884586818306048> Bot has been rejected.");
=======
  client.channels.get(client.config.channels.rejectedAuditChannel).send(declineEmbed);

  const user = client.users.get(bot1.mainOwner);
  if (user) user.send(`Your bot <@${bot}> has been rejected by ${message.author.tag}.`);
  reply("Bot has been rejected.");
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
};

module.exports.help = {
  name: "decline"
};
