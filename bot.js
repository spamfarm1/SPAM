const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("560833206497181698")
setInterval(function() {
channel.send(`APG APG APG APG APG`);
}, 30)
})

client.login(process.env.BOT_TOKEN);