import express from 'express';
import User from '../../database/models/users.model';
const usersRouter = express.Router();


usersRouter.post('/register', async (req, res) =>
{
    const newUser = req.params;
    if(!newUser.username || !newUser.password)
    {
        res.send(400).json({ success: false, message: "Please make sure to enter both a username and a password"});
    }

    try {
        await newUser.save();
   } catch(error){
        console.log("Error creating user");
        res.send(500).json({ success: false, message: "Server error"});
    }
})


export default usersRouter;