const Discord = require('discord.js');
require('dotenv').config()

const TOKEN = 'OTgxMDg5NjA5MDg3ODc3MTUw.GrOrSU.GCdG2aKP1uxjPoNYgiSfiwwS-jF8ewZv1I1p54'

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Manz Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hey Manz"){
        message.reply("Yay!")
    }
})

const joinerChannelId = "981624853553623081"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(joinerChannelId).send(`<@${member.id}> Welcome to the server! Checking for possible Zalgo's now.`)
})

client.login(process.env.TOKEN)