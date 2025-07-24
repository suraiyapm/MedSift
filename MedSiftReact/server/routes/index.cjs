const express = require('express');
const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
    res.send("welcome to MedSift api!");
})
const notesRouter = require('./notes.cjs');
indexRouter.use('/notes', notesRouter);

module.exports = indexRouter;