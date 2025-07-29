import mongoose from "mongoose";


const notesSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});


const Note = mongoose.model('Notes', notesSchema);

export default Note;