// Packages required!
const Discord = require("discord.js");

// config for prefix and login token
const config = require("./config.json");

// defining our discord client
const bot = new Discord.Client();

// Listener Events
bot.on("ready", async () => {

console.log("Tutorial bot is Online!");

bot.user.setActivity("a tutorial", {type: "WATCHING"});

bot.user.setStatus("idle");

});

bot.on("message", async message => {
if (message.author.bot) return;
if (message.channel.type === "dm") return;

let prefix = config.prefix;
if (!message.content.startsWith(prefix)) return;

let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let args = messageArray.slice(1);

if(cmd === `${prefix}ping`){
  message.channel.send("Pong!")
}

  });

// login
bot.login(config.token); // since our token is in config we put config.token
