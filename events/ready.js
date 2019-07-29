const Discord = require("discord.js")


module.exports = bot => {
    console.log(`${bot.user.username} is online`)

    let statuses = [
        `Moosik`
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "Playing", url: "https://twitch.tv/ElectronExcited"});
    }, 30000)
}


