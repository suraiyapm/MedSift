import express from 'express';
import User from '../../database/models/users.model.js';
import Note from '../../database/models/notes.model.js';
import  jwt  from 'jsonwebtoken';
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
        const token = jwt.sign({user: user.username}, process.env.JWT_SECRET);
        res.send({ success: true, data: userLogin, token: token});
    } else {
        res.send({ success: false, message: "No username/password combination in database...please register to login"});
    }
    } catch (error) {
        res.send({ success: false, message: "Error logging in...check username/password"});
        console.error(error);
    }
});

usersRouter.delete('/:userId', async (req, res) => {
    const {userId} = req.params;
    if(!userId){
        res.send({ success: false, message: "please provide a userId for deletion"});
    }
    try {
        const deletedUser = await User.findByIdAndDelete(userId).then(await Note.deleteMany({ author: userId}));
        if(deletedUser){
            res.send({ success: true});
        }
    } catch (error) {
        res.send({ success: false, message: "Server Error"});
        console.error(error);
    }
});

export default usersRouter;