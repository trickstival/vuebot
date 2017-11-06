const fs = require('fs')
const { prefix } = process.env
const commandsFolder = `${__dirname}/../commands`

/**
 * Event called when bot detect any message in chat, check if command is valid, get all
 * params and check if exists current command file, if exists call your file
 */
exports.run = (bot, message) => {
    const { content, author, channel,  } = message

    const isCommand = content.startsWith(prefix) && !author.bot
    if(!isCommand)
        return

    const args = content.split(' ')
    const command = args[0].slice(prefix.length)
    const fileCommandExists = fs.existsSync(`${commandsFolder}/${command}.js`)

    if(!fileCommandExists)
        return

    const commandFile = require(`${commandsFolder}/${command}`)
    commandFile.run(bot, author, channel, args)
}