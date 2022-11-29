/* 
Uses a given ID to update the corresponding document.
Request body example: Changing a person's middle name to Zoomer
{
    "_id": "6351d6871586cb9e8425b18c",
    "middleName": "Zoomer"
}
*/

import connectMongo from '../../../utils/connectMongo';
import Veneration from '../../../models/venModel';

export default async function findVeneration(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('UPDATING DOCUMENT');
        const query = {"_id": req.body._id};
        res.json(await Veneration.findOneAndUpdate(query, { $set: req.body}));
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}