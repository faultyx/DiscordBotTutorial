const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setTitle(`${message.guild.name} | ${message.guild.id}`)
.setThumbnail(message.guild.iconURL)
.setColor("#42f4e2")
.setTimestamp()
.addField("Owner:", `${message.guild.owner.user.tag} | ${message.guild.owner.user.id}`)
.addField("Created At:", message.guild.createdAt)
.addField("Member Count:", message.guild.memberCount)
message.channel.send(embed);

};
module.exports.help = {
  name: "serverinfo"
};
