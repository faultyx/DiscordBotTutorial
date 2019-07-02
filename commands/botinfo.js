const Discord = require("discord.js");
module.exports.run = (bot, message, args) => {
const embed = new Discord.RichEmbed()
.setColor("#9842f4")
.setTitle(bot.user.tag)
.setThumbnail(bot.user.displayAvatarURL)
.setTimestamp()
.setFooter(bot.user.id)
.addField("Created At:", bot.user.createdAt.toUTCString())
message.channel.send(embed);
};
module.exports.help = {
  name: "botinfo"
};
