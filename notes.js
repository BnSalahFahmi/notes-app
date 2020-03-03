const fs = require('fs')
const chalk = require('chalk')
const dateUtils = require('./date')

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)
    if (!duplicateNote) {
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

const removeNote = title => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title)
    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green('Note removed Successfully'))
    } else {
        console.log(chalk.red('Non existing note !'))
    }
}

const readNote = title => {
    const notes = loadNotes()
    const note = notes.find(note => note.title == title)
    if (note) {
        return note
    } else {
        return chalk.red('Note not found!')
    }
}

const listNotes = _ => loadNotes()

const loadNotes = _ => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveNotes = notes => fs.writeFileSync('notes.json', JSON.stringify(notes))

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    readNote, readNote,
    listNotes: listNotes
}