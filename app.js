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

// login
bot.login(config.token); // since our token is in config we put config.token
