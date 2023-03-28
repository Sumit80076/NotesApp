const chalk=require('chalk')
const yargs=require('yargs')
const validator=require('validator')
const Notes=require('./notes.js')
const { describe, demandOption } = require('yargs')
//console.log(getnotes())
//console.log(validator.isEmail('example.com'))
//console.log(chalk.bold.inverse.green('Success!'))

//console.log(process.argv[2])

//const command=process.argv[2]

//if(command === 'add'){
    //console.log('Adding node!')
//}
//else if(command === 'remove'){
    //console.log('Removing note!')
//}
// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        Notes.addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        Notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists your notes',
    handler(){
        Notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder:{
        title:{
            describe: 'Notes title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        Notes.readNotes(argv.title)
    }
})
console.log(yargs.argv)