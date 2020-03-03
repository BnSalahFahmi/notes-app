const yargs = require('yargs')
const notes = require('./notes')
const chalk = require('chalk')

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
    handler(argv) {
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
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes !',
    handler() {
        console.log(chalk.inverse('Your Notes :'))
        console.table(notes.listNotes())
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note !',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(notes.readNote(argv.title))
    }
})

yargs.parse()