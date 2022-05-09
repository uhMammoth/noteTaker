const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

function addNote(body, notes){
    const note = body;
    notes.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes}, null, 2)
    );
    return note;
}

function idGen(){
    let id = uuidv4();
    return id;
}

module.exports = {
    addNote,
    idGen,

  };