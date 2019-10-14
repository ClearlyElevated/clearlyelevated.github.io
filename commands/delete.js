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
  if (!bot) return reply("<:redTick:568885082321059865> Please specify a bot to forcefully delete.");
  if (!reason) return reply("<:redTick:568885082321059865> Please specify a reason to forcefully delete the bot.");

  const bot1 = await bots.findOne({ id: bot });
  if (!bot1) return reply("<:redTick:568885082321059865> The specified bot couldn't be found.");
  await bots.findOneAndDelete({ id: bot });
  if (client.guilds.get("560865387206672384").members.get(bot1.id)) await client.guilds.get("560865387206672384").members.get(bot1.id).kick("Forcefully deleted.");
=======
  if (!bot) return reply("Please specify a bot to forcefully delete.");
  if (!reason) return reply("Please specify a reason to forcefully delete the bot.");

  const bot1 = await bots.findOne({ id: bot });
  if (!bot1) return reply("The specified bot couldn't be found.");
  await bots.findOneAndDelete({ id: bot });
  if (client.guilds.get(client.config.baseGuildId).members.get(bot1.id)) await client.guilds.get(client.config.baseGuildId).members.get(bot1.id).kick("Forcefully deleted.");
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
  const bt = await client.users.fetch(bot1.id);

  var allOwners = bot1.owners;
  allOwners.unshift(bot1.mainOwner);
  allOwners = allOwners.map(u => `<@${u}>`);

<<<<<<< HEAD
  client.channels.get("561622522798407740").send(`<@${bot}> by ${allOwners.join(" ")} has been forcefully deleted by ${message.author}.`);
  client.channels.get("561659766917562368").send(`<@${bot}> by ${allOwners.join(" ")} has been forcefully deleted by ${message.author}.`);

  for (const owner of allOwners) {
    const theOwner = client.guilds.get("560865387206672384").members.get(owner);
=======
  client.channels.get(client.config.channels.botDeletionLogsChannel).send(`<@${bot}> by ${allOwners.join(" ")} has been forcefully deleted by ${message.author}.`);

  for (const owner of allOwners) {
    const theOwner = client.guilds.get(client.config.baseGuildId).members.get(owner);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
    if (theOwner) {
      var allBots = await bots.find();
      allBots.filter(b => b.mainOwner === owner || b.owners.includes(owner));
      if (allBots.length > 0) return;
<<<<<<< HEAD
      if (theOwner.roles.has("561714394388496394")) theOwner.roles.remove(client.guilds.get("560865387206672384").roles.get("561714394388496394"));
      if (theOwner.roles.has("561715209962651668")) theOwner.roles.remove(client.guilds.get("560865387206672384").roles.get("561715209962651668"));
=======
      if (theOwner.roles.has(client.config.developerRole)) theOwner.roles.remove(client.guilds.get(client.config.baseGuildId).roles.get(client.config.developerRole));
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
    }
  }

  const deleteEmbed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTitle("Bot Forcefull Deleted")
    .setDescription(`**Bot**: ${bt.tag} (ID: ${bt.id})\n**Moderator**: ${message.author.tag} (ID: ${message.author.id})\n**Reason**: ${reason}`)
    .setTimestamp();
<<<<<<< HEAD
  client.channels.get("560890986390224897").send(deleteEmbed);
  client.channels.get("561660098678620161").send(deleteEmbed);
=======
  client.channels.get(client.config.channels.botDeletionAuditChannel).send(deleteEmbed);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
  const user = client.users.get(bot1.mainOwner);
  if (user) user.send(`Your bot <@${bot}> has been forcefully deleted from the list by ${message.author.tag}.`);
  reply("Successfully forcefully deleted bot.");
};

module.exports.help = {
  name: "delete"
};
