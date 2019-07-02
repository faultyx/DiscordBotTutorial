module.exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Pinging");
  msg.edit(`Ping. ${bot.ping}ms`);

};

module.exports.help = {
  name: "ping"
};
