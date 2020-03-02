const fs = require('fs')
const chalk = require('chalk')
const dateUtils = require('./date')

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length == 0) {
        notes.push({
            title: title,
            body: body,
            creationDate: dateUtils.getCurrentDateTime()
        })

        saveNotes(notes)
        console.log(chalk.green('Note saved Successfully'))
    } else {
        console.log(chalk.red('Note title taken !'))
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed Successfully'))
    } else {
        console.log(chalk.red('Non existing note !'))
    }
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    const data = JSON.stringify(notes)
    fs.writeFileSync('notes.json', data)
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote
}