const yargs = require('yargs')
const notes = require('./notes')

// Customize yargs version
yargs.version('1.5.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note !',
    builder: {
        title: {
            describe: 'Note title perfect !',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note !',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.parse()