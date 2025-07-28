import { Router } from 'express';
import Note from '../../database/models/notes.model.js';
const notesRouter = Router();

notesRouter.get("/", async (req, res) => {
    try {
        const notes = await Note.find({});
        res.status(200).json({ success: true, data: notes});
    } catch (error) {
        console.log("Error getting all notes");
        res.status(500).json({ success: false, message: "Server error"});
        
    }
})

notesRouter.post("/",  async (req, res) => {
    const note = req.body;

    if(!note.text){
        return res.status(400).json({success: false, message: "A note must include text"});
    }
    const newNote = new Note(note);
    try {
        await newNote.save();
        res.status(201).json({ success: true, data: newNote});
    } catch (error){
        console.log("Error posting note");
        res.status(500).json({ success: false, message: "Server error"});
    }
});

notesRouter.patch("/:id", async (req, res) => {
    const id = req.body;
    try {
        await Note.getNoteById({id})
    } catch (error)
    {
        console.error(error);
        res.status(500).json({ success: false, message: "Server error"});
    }
})

export default notesRouter;
