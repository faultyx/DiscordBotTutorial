const config = require("../config.json");
module.exports.run = async (bot, message) => {

if (message.author.bot) return;

let prefix = config.defaultPrefix;

if (!message.content.startsWith(prefix)) return;

let args = message.content.split(" ").slice(1);
  
let command = args.shift();
  
let cmd = bot.commands.get(command);
  
cmd.run(bot, message, args);
    
};
