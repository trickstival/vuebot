const fs = require('fs')

exports.run = (client, msg) => {
    // Checking if it is a v-bot command or a simple txt msg and if author is a bot
    if(!msg.content.startsWith(process.env.prefix) || msg.author.bot) return

    fs.readdir('../commands/', (err, files) => {
        const command = msg.content.split(' ')[0].slice(process.env.prefix.length)

        try {
            const commandFile = require(`../commands/${command}`)
            let args = msg.content.split(' ')
            commandFile.run(client, msg, args)
        } catch (error) {
            console.error(error)
        }
    })
}