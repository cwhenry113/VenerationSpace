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

/*
BOILERPLATE FUNCTION
 const findVeneration = async () => {
    console.log('FINDING VENERATION');
    //!!!THIS WILL ALWAYS DO THE SAME THING. THIS IS BOILERPLATE. FILL IN OR REMOVE THESE FIELDS USING THE FRONTEND.!!!
    const firstName = "John";
    const lastName = "Doe";
    const middleName = "Hubert";
    const bday = new Date("01/01/1900");
    const death = new Date("01/01/2000");
    const bio = "This is a short bio for the boilerplate function"
    const creation_date = new Date("01/01/2021");
    const last_update = new Date("01/02/2021");
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await fetch('/api/veneration/find', {
      method: 'GET',
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
        createdAt: `${creation_date}`,
        updatedAt: `${last_update}`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
*/