const Discord = require("discord.js");
const fs = require("fs");

// config for prefix and login token
const config = require("./config.json");

// defining our discord client
const bot = new Discord.Client();

bot.commands = new Discord.Collection();

// command handler
fs.readdir("./commands/", (err, files) => {

if (err) 
  console.log(err);

let jsfile = files.filter(f => f.split(".").pop() === "js")
if(jsfile.length <= 0){
console.log("No files in the commands folder!");
return;
  
}

jsfile.forEach((f, i) => {

let props = require(`./commands/${f}`);
console.log(`${f} was Loaded!`);
bot.commands.set(props.help.name, props);

});

});

fs.readdir("./events/", (err, files) => {
    console.log(`${files.length} Events Loaded.`);
    if (err)
      console.log(err);
    files.forEach(file => {
        let eventFunc = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        bot.on(eventName, (...args) => eventFunc.run(bot, ...args));
    });
});

// Listener Events
bot.on("ready", async () => {

console.log(`${bot.user.tag} is Online!`);

bot.user.setActivity("a tutorial", {type: "WATCHING"});

bot.user.setStatus("online");

});

bot.on("message", async message => {

if (message.author.bot) return;

let prefix = config.defaultPrefix;

if (!message.content.startsWith(prefix)) return;

let args = message.content.split(" ").slice(1);
  
let command = args.shift();
  
let cmd = bot.commands.get(command);
  
cmd.run(bot, message, args);

});

// login
bot.login(config.token);
