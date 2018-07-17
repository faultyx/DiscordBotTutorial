// Packages required!
const Discord = require("discord.js");

// config for prefix and login token
const config = require("./config.json");

// defining our discord client
const bot = new Discord.Client();

// Listener Events
bot.on("ready", async () => {

console.log(`${bot.user.tag} is Online!`);

bot.user.setActivity("a tutorial", {type: "WATCHING"});

bot.user.setStatus("dnd");

});

bot.on("message", async message => {

if (message.author.bot) return;

let prefix = config.prefix;

if (!message.content.startsWith(prefix)) return;

let msg = message.content.toLowerCase()

let args = message.content.slice(prefix.length).slice(" ");

if (msg.startsWith(prefix + "ping")) {
  let msg = await message.channel.send("Pinging");
  msg.edit(`:ping_pong:Pong! \`${msg.createdTimestamp - message.createdTimestamp}ms\``);
}

});

// login
bot.login(config.token); // since our token is in config we put config.token
