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

// login
bot.login(config.token);
