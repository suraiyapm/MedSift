import { Router } from 'express';
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.send("welcome to MedSift api!");
})
import notesRouter from './notes.js';
indexRouter.use('/notes', notesRouter);

import usersRouter from './users.js';
indexRouter.use('/users', usersRouter);

import pubmedRouter from './pubmed.js';
indexRouter.use('/pubmed', pubmedRouter);

import journalsRouter from './journals.js';
indexRouter.use('/journals', journalsRouter);

export default indexRouter;