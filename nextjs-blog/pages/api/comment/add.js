import connectMongo from '../../../utils/connectMongo';
import Comment from '../../../models/comment';

export default async function addVeneration(req, res) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('CREATING DOCUMENT');
    const com = await Comment.create(req.body);
    console.log('CREATED DOCUMENT');

    res.json({ com });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}