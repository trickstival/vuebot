const fs = require('fs')
const { prefix } = process.env

/**
 * Event called when bot detect any message in chat, check if command is valid, get all
 * params and check if exists current command file, if exists call your file
 */
exports.run = (client, msg) => {
    const { content, author, channel } = msg

    const isCommand = content.startsWith(prefix) && !author.bot
    if(!isCommand)
        return

    const args = content.split(' ')
    const command = args[0].slice(prefix.length)
    const fileCommandExists = fs.existsSync(`./commands/${command}.js`)

    if(!fileCommandExists)
        return

    const commandFile = require(`../commands/${command}`)
    
    commandFile.run(client, channel, args)
}