const Discord = require('discord.js');
require('dotenv').config()
const TOKEN = 'OTgxMDg5NjA5MDg3ODc3MTUw.GrOrSU.GCdG2aKP1uxjPoNYgiSfiwwS-jF8ewZv1I1p54'

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Manz Logged in as ${client.user.tag}`)
})

client.login(process.env.TOKEN)