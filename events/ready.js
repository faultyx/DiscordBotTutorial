module.exports.run = (bot) => {
bot.user.setActivity("a tutorial", {type: "WATCHING"});

bot.user.setStatus("online");
console.log(`${bot.user.tag} is Online!`);
};
