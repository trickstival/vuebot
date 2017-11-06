const Discord = require('discord.js')
const fs = require('fs')
const tempPath = `${__dirname}/../../tmp`

exports.run = (client, channel, args) => {
    fs.writeFile(`${tempPath}/file.vue`, args[1], err => {
        if(err)
            throw err

        fs.readFile(`${tempPath}/file.vue`, (err, data) => {
            channel.send('Ta aí seu componente', new Discord.Attachment(data, 'file.vue'))
        })
    })
}