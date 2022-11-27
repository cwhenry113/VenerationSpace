/*
Request body example:
{
    "_id": "6351d6871586cb9e8425b18c"
}
*/

import connectMongo from '../../../utils/connectMongo';
import Comment from '../../../models/comment';

export default async function findCommentById(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('FINDING DOCUMENT');
        const foundCom = await Comment.findById().exec();
        res.json({ foundCom });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

/*
BOILERPLATE FUNCTION
 const findCommentById = async () => {
    console.log('FINDING COMMENT BY ID');
    //!!!THIS WILL ALWAYS DO THE SAME THING. THIS IS BOILERPLATE. FILL IN OR REMOVE THESE FIELDS USING THE FRONTEND.!!!
    const id = "6351d6871586cb9e8425b18c"
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await fetch('/api/comment/findById', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: `${id}`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
*/