const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();
const port = 3000;
const mainRouter = require('./routes/index.cjs');

server.use(cors());
server.use(morgan('combined'));
server.use(express.json());

server.use('/api', mainRouter);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});