import connectMongo from '../../../utils/connectMongo';
import Veneration from '../../../models/venModel';

export default async function addVeneration(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const ven = await Veneration.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ ven });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

/*
BOILERPLATE FUNCTION
 const createVeneration = async () => {
    console.log('CREATING VENERATION');
    //!!!THIS WILL ALWAYS MAKE THIS SAME GUY. THIS IS BOILERPLATE. FILL IN OR REMOVE THESE FIELDS USING THE FRONTEND.!!!
    const firstName = "John";
    const lastName = "Doe";
    const middleName = "Hubert";
    const bday = new Date("01/01/1900");
    const death = new Date("01/01/2000");
    const bio = "This is a short bio for the boilerplate function"
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await fetch('/api/veneration/add', {
      method: 'POST',
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