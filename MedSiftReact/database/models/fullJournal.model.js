import mongoose from "mongoose";

const fullJournalSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
     text: {
        type: String
     }
});

const FullJournal = mongoose.model('FullJournals', fullJournalSchema);

export default FullJournal;