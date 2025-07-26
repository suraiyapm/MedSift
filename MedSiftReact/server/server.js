//Please excuse the mess in here! Alot of this will be moved into seperate router files...
//this is just for testing formatting 

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
const server = express();
const port = 3000;
import indexRouter from './routes/index.js';
import seedDatabase from '../database/seed.js';
import { MongoClient } from 'mongodb';

dotenv.config();
const connectionString = process.env.DATABASE_URL;

server.use(cors());
server.use(morgan('combined'));
server.use(express.json());

server.use('/api', indexRouter);
const client = new MongoClient(connectionString);

async function connectToMongoDB()
{
  try{
      await client.connect();
      console.log("Connected to mongoDB successfully");
  } catch(error){
      console.log(error);
  }
}
connectToMongoDB();
seedDatabase(client, 'Users');

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});