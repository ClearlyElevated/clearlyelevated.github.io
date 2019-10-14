const Discord = require("discord.js");
const bots = require("../models/bots");
const profiles = require("../models/profile");

module.exports.run = async (client, message, args, reply) => {
  const userProfile = await profiles.findOne({ id: message.author.id });
<<<<<<< HEAD
  if (!userProfile || userProfile.mod !== true && userProfile.admin !== true) return reply(`<:redTick:568885082321059865> You aren't allowed to perform this action`);

  var bot = message.mentions.users.first() || { id: args[0] };
  if (bot) bot = bot.id;
  if (!bot) return reply("<a:aRedTick:568884586818306048> Please specify a bot to approve.");

  await bots.findOne({ id: bot }, async (err, res) => {
    if (err) console.log(err);
    if (!res) return reply(`<a:aRedTick:568884586818306048> The specified bot was not found in the queue.`);
    res.approved = true;
    await res.save().catch(e => console.log(e));
    if (client.guilds.get("560865387206672384").members.get(res.mainOwner)) {
      client.guilds.get("560865387206672384").members.get(res.mainOwner).roles.add(client.guilds.get("560865387206672384").roles.find(r => r.name === "Developer"));
    }

    for (const owner of res.owners) {
      if (client.guilds.get("560865387206672384").members.get(owner)) client.guilds.get("560865387206672384").members.get(owner).roles.add(client.guilds.get("560865387206672384").roles.find(r => r.name === "Developer"));
=======
  if (!userProfile || userProfile.mod !== true && userProfile.admin !== true) return reply(`You are not allowed to perform this action`);

  var bot = message.mentions.users.first() || { id: args[0] };
  if (bot) bot = bot.id;
  if (!bot) return reply("Please specify a bot to approve.");

  await bots.findOne({ id: bot }, async (err, res) => {
    if (err) console.log(err);
    if (!res) return reply(`The specified bot was not found in the queue.`);
    res.approved = true;
    await res.save().catch(e => console.log(e));
    if (client.guilds.get(client.config.baseGuildId).members.get(res.mainOwner)) {
      client.guilds.get(client.config.baseGuildId).members.get(res.mainOwner).roles.add(client.guilds.get(client.config.baseGuildId).roles.get(client.config.developerRole));
    }

    for (const owner of res.owners) {
      if (client.guilds.get(client.config.baseGuildId).members.get(owner)) client.guilds.get(client.config.baseGuildId).members.members.get(owner).roles.add(client.guilds.get(client.config.baseGuildId).roles.get(client.config.developerRole));
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
    }

    var allOwners = res.owners;
    allOwners.unshift(res.mainOwner);
    allOwners = allOwners.map(u => `<@${u}>`);
<<<<<<< HEAD
    await client.channels.get("561622522798407740").send(`<@${res.id}> by ${allOwners.join(" ")} has been approved by <@${message.author.id}>.\n**URL**: https://discordhouse.org/bot/${bot}`);
    await client.channels.get("561659713515945985").send(`<@${res.id}> by ${allOwners.join(" ")} has been approved by <@${message.author.id}>.\n**URL**: https://discordhouse.org/bot/${bot}`);
=======
    await client.channels.get(client.config.channels.approveLogsChannel).send(`<@${res.id}> by ${allOwners.join(" ")} has been approved by <@${message.author.id}>.`);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
    const user = client.users.get(res.mainOwner);
    if (user) user.send(`Your bot <@${bot}> was approved by ${message.author.tag}.`);
    client.emit("updatePresence");
    const Embed = new Discord.MessageEmbed()
<<<<<<< HEAD
    .setDescription(`Sucessfully approved <@${bot}>.\n[Click here to invite to the main server](${res.invite}&guild_id=560865387206672384)`)
    .setColor('GREEN');
    reply(Embed);
    const tokick = client.guilds.get("561629999111602185").members.get(bot.id);
    if (tokick) tokick.kick('approved');
=======
    .setDescription(`Sucessfully approved <@${bot}>. Invite Link: ${res.invite}`)
    .setColor('GREEN');
    reply(Embed);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
  });
};

module.exports.help = {
  name: "approve"
};
