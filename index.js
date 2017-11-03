const Discord = require('discord.js'),
      client = new Discord.Client(),
      prefix = 'v-'

      
// Iniciando conexão
client.on('ready', () => {
    console.log('conectado', client.channels.size)
})

client.login('Mzc1ODQ0MjYyMDI3MzI5NTM3.DN1wSw.uaaVb9087IjL3NUiVS5ouuCEXpU')

client.on('message', msg => {
    if(msg.content.startsWith(prefix + 'speak')) msg.channel.sendMessage('kk eae men')
})