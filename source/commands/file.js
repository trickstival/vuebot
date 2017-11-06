const Discord = require('discord.js')
const fs = require('fs')

exports.run = (client, channel, args) => {
    fs.writeFile(__dirname + '/../tmp/file.vue', args[1], err => {
        if(err)
            throw err

        fs.readFile(__dirname + '/../tmp/file.vue', (err, data) => {
            channel.send('Ta aí seu file', new Discord.Attachment(data, 'file.vue'))
        })
    })
}