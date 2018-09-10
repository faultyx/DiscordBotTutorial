const Discord = require("discord.js"); // required Package
exports.run = async (bot, message, args) => {

let user = message.mentions.users.first() || message.author;

let embed = new Discord.RichEmbed()
.setColor("#4bf442")
.setTitle(`${user.tag}'s Info`)
.setFooter(`User ID: ${user.id}`)
.setTimestamp()
.addField("Discord Name:", user.username)
.addField("Discriminator:", `#${user.discriminator}`)
.addField("Joined Discord:", user.createdAt)
.addField("User Status:", user.presence.status)
.addField("User Game:", `${user.presence.game ? user.presence.game.name: 'Not playing anything!'}`)
message.channel.send(embed)
}
exports.help = {
  name: "userinfo"
}
