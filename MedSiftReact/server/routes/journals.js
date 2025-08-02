import { Router } from "express";
import Journal from "../../database/models/journals.model.js";
const journalsRouter = Router();

journalsRouter.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    try{
        const usersJournals = await Journal.find({user: userId});
        if(usersJournals){
            res.send({ success: true, data: usersJournals});
        } else {
            res.send({ success: false, message: "you have not saved any journals"});
        }
    } catch (error){
        console.error(error);
        res.send({ success: false, message: "Server error getting all user's journals"});
    }
});

journalsRouter.post('/', async (req, res) => {
    const journal = req.body;
    const newJournal = new Journal(journal);
    try {
        await newJournal.save();
        res.send({ success: true, data: newJournal});
    } catch (error){
        console.error(error);
        res.send({ success: false, message: "Server error creating a journal"});

    }
});


export default journalsRouter;