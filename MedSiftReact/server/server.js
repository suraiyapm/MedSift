//Please excuse the mess in here! Alot of this will be moved into seperate router files...
//this is just for testing formatting 

import { connectDB } from '../database/db.js';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
const server = express();
const port = 3000;
import indexRouter from './routes/index.js';
import seedDatabase from '../database/seed.js';


server.use(cors());
server.use(morgan('combined'));
server.use(express.json());

server.use('/api', indexRouter);

// seedDatabase(client, 'Users');

server.listen(port, () => {
  connectDB();
  console.log(`Server listening on port ${port}`)
});