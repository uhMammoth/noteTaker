const router = require('express').Router();
const { addNote, idGen } = require('../lib/notes');
const {  notes } = require('../db/db.json');


// const {} = require('./lib/notes');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    if (req.body.id === '') {
        req.body.id = idGen();
    }
    const note = addNote(req.body, notes);
    
    res.json(note);
});



//GET /api/notes should read the db json file and return all saved notes as json
//POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).



module.exports = router;