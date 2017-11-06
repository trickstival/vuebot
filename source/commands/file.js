const Discord = require('discord.js')
const fs = require('fs')
const tempPath = `${__dirname}/../../tmp`

exports.run = (bot, author, channel, args) => {
    const { id, username } = author
    fs.writeFile(`${tempPath}/${id}.vue`, args[1], err => {
        if(err)
            throw err

        fs.readFile(`${tempPath}/${id}.vue`, (err, data) => {
            channel.send('Ta aí seu componente', new Discord.Attachment(data, `file-${username}.vue`))

            fs.unlink(`${tempPath}/${id}.vue`)
        })
    })
}