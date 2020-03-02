const fs = require('fs')
const dateUtils = require('./date')

const addNote = function (title, body) {
    const notes = loadNotes()
    notes.push({
        title: title,
        body: body,
        creationDate: dateUtils.getCurrentDateTime()
    })
    saveNotes(notes) 
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
    addNote: addNote
}