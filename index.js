/* trickstival - 11-3-2017 */

const Discord = require('discord.js'),
      client = new Discord.Client(),
      fs = require('fs')

//Automating discord events to files
fs.readdir('./events/', (err, files) => {
    if(err) return console.error(err)
    files.forEach(file => {
        const evtName = file.split('.')[0],
              evtFunc = require(`./events/${file}`)
        //run the file when the event with its name is fired
        client.on(evtName, (...args) => evtFunc.run(client, ...args))
    })
})

//Sign in just after all that stuff
client.login(process.env.token)