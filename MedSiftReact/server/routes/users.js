import express from 'express';
import User from '../../database/models/users.model.js';
const usersRouter = express.Router();


usersRouter.post('/register', async (req, res) =>
{
    const user = req.body;
    if(!user.username || !user.password)
    {
        res.send({ success: false, message: "You must provide both a username and password"});
    }
    const newUser = new User(user);
    try {
        await newUser.save();
        res.send({ success: true, data: newUser}); 
    } catch(error){
        res.send({ success: false, message: "Register server error"});
        throw(error);
    }
});

usersRouter.post('/login', async (req, res) => {
    const user = req.body;
    if(!user.username || !user.password)
    {
        res.send({ success: false, message: "You must provide both a username and password"});
    }
    try {
    const userLogin = await User.find({ username: user.username, password: user.password});
    if(userLogin){
        res.send({ success: true, data: userLogin});
    } else {
        res.send({ success: false, message: "No username/password combination in database"});
    }

    } catch (error) {
        res.send({ success: false, message: "Error logging in...check username/password"});
        console.error(error);
    }



})



export default usersRouter;