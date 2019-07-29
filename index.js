const Discord = require('discord.js');
const client = new Discord.Client();
require("./util/eventHandler")(client)

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    let pp = Math.round(client.ping)
    msg.channel.send(pp + " `ms`");
  }
  
   if (msg.content === 'shutdown') {
       msg.channel.send('Shutting Down :wave:')
        msg.react("✅");
        process.exit(1)
    }
  
  
  
  
  
});

client.login(process.env.token);
