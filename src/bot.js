const { Client, Collection } = require('discord.js')

require('dotenv').config()

const client = new Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGE_REACTIONS',
    'GUILD_MESSAGES',
    'GUILD_INVITES',
    'GUILD_VOICE_STATES',
    'GUILD_MEMBERS',
    'GUILD_PRESENCES'
  ]
})

client.cooldowns = new Collection()
client.commands = new Collection()
client.aliases = new Collection()
client.configs = require('./configs/bot.json')

handlers = ['eventsHandler', 'commandsHandler']

handlers.forEach(handler => {
  require(`./handlers/${handler}`)(client)
})

client.login(process.env.TOKEN)