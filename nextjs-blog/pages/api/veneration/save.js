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

/*
BOILERPLATE FUNCTION
 const saveVeneration = async () => {
    console.log('SAVING VENERATION CHANGES');
    //!!!THIS WILL ALWAYS DO THE SAME THING. THIS IS BOILERPLATE. FILL IN OR REMOVE THESE FIELDS USING THE FRONTEND.!!!
    const firstName = "John";
    const lastName = "Doe";
    const middleName = "Hubert";
    const bday = new Date("01/01/1900");
    const death = new Date("01/01/2000");
    const bio = "This is a short bio for the boilerplate function"
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await fetch('/api/veneration/save', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        givenName: `${firstName}`,
        familyName: `${lastName}`,
        middleName: `${middleName}`,
        born: `${bday}`,
        died: `${death}`,
        bio: `${bio}`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
*/