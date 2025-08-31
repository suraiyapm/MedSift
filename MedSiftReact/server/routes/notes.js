import { Router } from 'express';
import Note from '../../database/models/notes.model.js';
import { jwtAuthorization } from './jwtAuthorization.js';

const notesRouter = Router();


notesRouter.get("/", async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes});
    } catch (error) {
        console.log("Error getting all notes");
        res.status(500).json({ success: false, message: "Server error"});
        
    }
});

notesRouter.get("/:authorId", async (req, res) => {
    const {authorId} = req.params;
    try {
        const allNotesByAuthor = await Note.find({author: authorId});
        if(allNotesByAuthor){
            res.send(allNotesByAuthor);
        } else {
            res.send( {success: false, message: "No notes by author"});
        }

    } catch (error) {
        console.error(error);
        res.send({ succes: false, message: "Error getting author's notes"});
    }
});


notesRouter.post("/", jwtAuthorization, async (req, res) => {
    const note = req.body;
    if(!note.text){
        res.send({ success: false, message: "A note must include text"});
    }
    const newNote = new Note(note);
    try {
        await newNote.save();
        res.send({ success: true, data: newNote});
    } catch (error){
        console.error(error);
        res.send({ success: false, message: "Server error creating a note"});
    }
});

notesRouter.patch("/:id", async (req, res) => {
    const id = req.params;
    const updates = req.body;
    if(!updates || !id){
        res.send({ success: false, message: "Please provide both updates and an id for note"});
    }
    try {
        const updatedNote = await Note.findByIdAndUpdate({id}, {...updates});
        res.send({ success: true, data: updatedNote });
    } catch (error)
    {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error"});
    }
});

notesRouter.delete("/:id", jwtAuthorization, async (req, res) => {
    const {id} = req.params;
    if(!id){
        res.send({ success: false, message: "no id submitted for note"});
    }
    try {
     const deletedNote = await Note.findByIdAndDelete(id);
     res.send({ success: true, data: deletedNote});
    } catch (error){
        console.error(error);
        res.send({ success: false, message: "Server error"});
    }
});

export default notesRouter;
