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

/*
BOILERPLATE FUNCTION
 const createComment = async () => {
    console.log('CREATING COMMENT');
    //!!!THIS WILL ALWAYS MAKE THIS SAME GUY. THIS IS BOILERPLATE. FILL IN OR REMOVE THESE FIELDS USING THE FRONTEND.!!!
    const parent = "6351d6871586cb9e8425b18c";
    const author = "Doe";
    const text = "Hubert";
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await fetch('/api/comment/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: `${parent}`,
        author: `${author}`,
        text: `${text}`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
*/