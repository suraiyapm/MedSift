import express from 'express';
const usersRouter = express.Router();

usersRouter.post('/register', async (req, res) =>
{
    try {
 
    res.status(200).json(user);

   } catch(error){
        console.log(error);
    }
})


export default usersRouter;