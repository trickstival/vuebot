//This file is responsable for the command param-file intermediation
const fs = require('fs')

const map = new Map()

fs.readdir('./archetypes/', (err, files) => {
    if(err) return console.error(err)
    let i = 0
    files.forEach(file => {
        fs.readFile(`./archetypes/${file}`, (fileErr, data) => {
            if(err) throw fileErr

            console.log('file putted', file)
            map.put(file, data)
            if(files.length == i) exported()
            i++
        })
    })
})

function exported(){
    exports = map
}
