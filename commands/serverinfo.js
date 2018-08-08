// discord.js pck required
const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
let icon = message.guild.iconURL;
const embed = new Discord.RichEmbed()
.setTitle("Serverinfo")
.setThumbnail(icon)
.setColor("#42f4e2")
.setTimestamp()
.addField("Owner:", message.guild.owner)
.addField("Owner ID:", message.guild.owner.id)
.addField("Server Name:", message.guild.name)
.addField("Server Created At:", message.guild.createdAt)
.addField("Server ID:", message.guild.id)
.addField("Member Count:", message.guild.memberCount)
message.channel.send(embed)

}
exports.help = {
  name: "serverinfo"
}
