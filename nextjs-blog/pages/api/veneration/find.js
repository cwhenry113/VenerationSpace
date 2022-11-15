/*
For finding by ID, please use findById.js instead.
Request body examples:
1. All people with the first name "John" and the last name "Doe"
{
    "givenName": "John",
    "familyName": "Doe"
}
2. All people with a first name similar to "John"
{
    "givenName": /John/i
}
3. All pages created between October 15 2022 and October 16 2022 
{
    "created_on": {
        $gte: new Date(2022, 10, 15), 
        $lt: new Date(2022, 10, 16)
    }
}
4. All people born before 1993
{
    "born": {
        $lt: new Date(1993, 12, 31)
    }
}
*/

import connectMongo from '../../../utils/connectMongo';
import Veneration from '../../../models/venModel';

export default async function findVeneration(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('FINDING DOCUMENT');
        const foundVen = await Veneration.find(req.body).exec();
        res.json({ foundVen });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}