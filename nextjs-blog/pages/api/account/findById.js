import connectMongo from '../../../utils/connectMongo';
import {account as Account} from '../../../models/account';

export default async function findAccountById(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('FINDING DOCUMENT');
        const foundAcc = await Account.findById(req.body).exec();
        res.json({ foundAcc });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}