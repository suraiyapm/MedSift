import mongoose from "mongoose";


const notesSchema = new mongoose.Schema({
    text: {
        type: String,
        requaired: true
    }
}, {
    timestamps: true
});


const Note = mongoose.model('Notes', notesSchema);

export default Note;