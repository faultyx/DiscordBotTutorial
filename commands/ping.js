exports.run = async (bot, message, args) => {

  let msg = await message.channel.send("Pinging");
  msg.edit(`:ping_pong:Pong! \`${msg.createdTimestamp - message.createdTimestamp}ms\``);

}

exports.help = {
  name: "ping"
}
