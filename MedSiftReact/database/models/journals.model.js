import mongoose, { Schema } from "mongoose";

const journalsSchema = new mongoose.Schema({ 
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    },
     title: {
        type: String
     },
      authors: {
        type: String
      },
      journal: {
        type: String
      },
      pubdate: {
        type: String
      },
      doi: {
        type: String
      },
      pages: {
        type: String
      },
      volume: {
        type: String
      },
      issue: {
        type: String
      },
      elocationid: {
        type: String
      },
      uid: {
        type: String
      }

});

const Journal = mongoose.model('Journals', journalsSchema);

export default Journal;