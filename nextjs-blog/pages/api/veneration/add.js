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