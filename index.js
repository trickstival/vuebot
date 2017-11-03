const Discord = require('discord.js'),
      client = new Discord.Client(),
      fs = require('fs'),
      config = require('./config.json')

fs.readdir('./events/', (err, files) => {
    if(err) return console.error(err)
    files.forEach(file => {
        const evtName = file.split('.')[0],
              evtFunc = require(`./events/${file}`)

        client.on(evtName, (...args) => evtFunc.run(client, ...args))
    })
})

client.login(config.token)