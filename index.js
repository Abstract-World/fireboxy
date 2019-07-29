const Discord = require('discord.js');
const client = new Discord.Client();
require("./util/eventHandler")(client)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    let pp = Math.round(client.ping)
    msg.channel.send(pp + "ms");
  }
  
  
  
  
  
});

client.login(process.env.token);
