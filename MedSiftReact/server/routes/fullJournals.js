import { Router } from "express";
import { jwtAuthorization } from "./jwtAuthorization.js";
import FullJournal from "../../database/models/fullJournal.model.js";
const fullJournalsRouter = Router();


fullJournalsRouter.get('/:userId', jwtAuthorization, async (req, res) => {
    const {userId} = req.params;
    try {
        const usersFullJournals = await FullJournal.find({user: userId});
        if(usersFullJournals){
            res.send({ success: true, data: usersFullJournals });
        } else {
            res.send({ success: false, message: "User has no fullJournals saved"});
        }
    } catch (error){
        console.error(error);
    }
});

fullJournalsRouter.post('/', jwtAuthorization, async (req, res) => {
    const fullJournal = req.body;
    const newFullJournal = new FullJournal(fullJournal);
    try {
        await newFullJournal.save();
        res.send({ success: true, data: newFullJournal});
    } catch (error) {
        console.error(error);
        res.send({ success: false, message: "Server error posting fullJournal"});
    }
});

fullJournalsRouter.delete('/:fullJournalId', jwtAuthorization, async (req, res) => {
    const { fullJournalId } = req.params;
    try {
        const result = await FullJournal.findByIdAndDelete(fullJournalId);
        if(result) {
            res.send({ success: true});
        } else {
            res.send({ success: false, message: "Database error deleting fullJournal"});
        }
    } catch (error){
        console.error(error);
        res.send({ success: false, message: "Server error deleting a fullJournal"});
    }
})



export default fullJournalsRouter;


