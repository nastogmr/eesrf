const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590160740737089546")
setInterval(function() {
channel.send(`ما لقييييييييييييييييييييييييييييييييييت ما اكتب`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
