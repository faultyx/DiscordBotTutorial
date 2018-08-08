// discord.js pck required
const Discord = require("discord.js");
exports.run = async (bot, message, args) => {
let avatar = bot.user.displayAvatarURL;
const embed = new Discord.RichEmbed()
.setColor("#9842f4")
.setThumbnail(avatar)
.setTimestamp()
.setTitle("Botinfo")
.addField("Bot Username:", bot.user.username)
.addField("Bot Discrim:", `#${bot.user.discriminator}`)
.addField("Bot ID:", bot.user.id)
.addField("Created At:", bot.user.createdAt)
message.channel.send(embed)
}
exports.help = {
  name: "botinfo"
}
