/*
Request body example:
{
    "_id": "6351d6871586cb9e8425b18c"
}
*/

import connectMongo from '../../../utils/connectMongo';
import Comment from '../../../models/comment';

export default async function findVeneration(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('FINDING DOCUMENT');
        const foundCom = await Comment.findById(req.body).exec();
        res.json({ foundCom });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}