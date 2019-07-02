const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

let user = message.mentions.users.first() || message.author;

let embed = new Discord.RichEmbed()
.setColor("#4bf442")
.setAuthor(`${user.tag} | ${user.id}`, user.displayAvatarURL)
.setTimestamp()
.addField("Joined Discord:", user.createdAt)
.addField("User Status:", user.presence.status)
.addField("User Game:", `${user.presence.game ? user.presence.game.name: 'Not playing anything!'}`)
message.channel.send(embed);
};
module.exports.help = {
  name: "userinfo"
};
