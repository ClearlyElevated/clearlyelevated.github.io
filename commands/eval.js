const Discord = require("discord.js");
const profiles = require("../models/profile");

module.exports.run = async (client, message, args, reply) => {
  const userProfile = await profiles.findOne({ id: message.author.id });
<<<<<<< HEAD
  if (!userProfile || userProfile.mod !== true && userProfile.admin !== true) return reply(`<:redTick:568885082321059865> You aren't allowed to perform this action.`); 
=======
  if (!userProfile || userProfile.mod !== true && userProfile.admin !== true) return reply(`<:redTick:568885082321059865> You aren't allowed to perform this action.`);
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
const code = args.join(" ");
  function clean(text) {
    if (typeof(text) === "string")
      return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
  }
          try {
          let ev = require('util').inspect(eval(code), { depth: 0 });
          let token = client.token.replace(/\./g, "\.")
<<<<<<< HEAD
          let re = new RegExp(token, 'g') 
          ev = ev.replace(re, "NO.FUCKING.TOKEN-f4DF5-4U-LOL-GET-GNOMED.54d4FFW.LOL").replace(client.config.dbUrl, "mongodb+srv://nolan:1234@bc-link-realm-x-bot-eojhb.mongodb.net/test?retryWrites=true&w=majority");
=======
          let re = new RegExp(token, 'g')
          ev = ev.replace(re, "Nice try!!").replace(client.config.dbUrl, "mongodb://this:was.supposed@to/?be.a.db.url.aint.it");
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
          const cleaned =  clean(ev)
          const MAX_CHARS = 3 + 2 + cleaned.length + 3;
          if (MAX_CHARS > 1500) {
            return message.channel.send("The output has exceeded 1500 charachters in length. Sending it as file...", { files: [{ attachment: Buffer.from(clean), name: "eval.txt" }] });
          }
<<<<<<< HEAD
          message.channel.send("**Input:**```js\n"+code+"```**Eval:**```js\n"+cleaned+"```")
=======
          reply("**Input:**```js\n"+code+"```**Eval:**```js\n"+cleaned+"```")
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
          } catch(err) {
            if (err.length > 1950) {
              err = err.substr(0, 800);
          }
<<<<<<< HEAD
              message.channel.send('Error :```js\n'+err+"```")
=======
              reply('Error :```js\n'+err+"```")
>>>>>>> 3d599a51fa2a65b5fd4e4b64b43240505baf459c
          }

};

module.exports.help = {
  name: "eval"
};
