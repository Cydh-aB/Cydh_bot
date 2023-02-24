const { Client, Events, GatewayIntentBits, Collection } = require('discord.js')


const {loadEvents} = require("./Handlers/eventHandlers")
const {loadCommands} = require("./Handlers/commandHandlers")

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers, 
        GatewayIntentBits.GuildPresences
    ]
});

client.event = new Collection()
client.commands = new Collection()
client.config = require('./config.json')

client.login(client.config.token).then(() => {
    loadEvents(client);
    loadCommands(client);
});