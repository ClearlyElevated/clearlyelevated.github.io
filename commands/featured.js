const Discord = require("discord.js");
const bots = require("../models/bots");
const profiles = require("../models/profile");

module.exports.run = async (client, message, args, reply) => {
<<<<<<< HEAD

  const userProfile = await profiles.findOne({ id: message.author.id });
  if (!userProfile || userProfile.admin !== true) return reply(`<:redTick:568885082321059865> You aren't allowed to perform this action.`);
  var bot = message.mentions.users.first() || { id: args[0] };
  if (bot) bot = bot.id;
  if (!bot) return reply("<:redTick:568885082321059865> Please specify a bot to feature.");
  if (!args[1]) return  reply(`Please provide an argument \`add/del\``)
  if (args[1] !== 'add' && args[1] !== 'del'  ) return reply(`<:redTick:568885082321059865> Please provide a valid argument (\`add/del\`)`)
  await bots.findOne({ id: bot }, async (err, res) => {
    if (err) console.log(err);
    if (!res) return reply(`<:redTick:568885082321059865> The specified bot wasn't found.`);
    if(args[1] == 'add') res.featured = true;
    if(args[1] == 'del') res.featured = false;
    await res.save().catch(e => console.log(e));
    if(args[1] == 'add')  reply(`${res.name} was added to the featured bots.`)
    if(args[1] == 'del')  reply(`${res.name} was removed from the featured bots.`)
   
   
  });


=======
  const userProfile = await profiles.findOne({ id: message.author.id });
  if (!userProfile || userProfile.admin !== true) return reply(`You are not allowed to perform this action.`);
  var bot = message.mentions.users.first() || { id: args[0] };
  if (bot) bot = bot.id;
  if (!bot) return reply("Please specify a bot to feature.");
  if (!args[1]) return  reply(`Please provide an argument \`add/del\``)
  if (args[1] !== "add" && args[1] !== "del"  ) return reply(`Please provide a valid argument (\`add/del\`)`)
  await bots.findOne({ id: bot }, async (err, res) => {
    if (err) console.log(err);
    if (!res) return reply(`The specified bot wasn"t found.`);
    if(args[1] == "add") res.featured = true;
    if(args[1] == "del") res.featured = false;
    await res.save().catch(e => console.log(e));
    if(args[1] == "add")  reply(`${res.name} was added to the featured bots.`)
    if(args[1] == "del")  reply(`${res.name} was removed from the featured bots.`)
  });
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
};

module.exports.help = {
  name: "featured"
};
