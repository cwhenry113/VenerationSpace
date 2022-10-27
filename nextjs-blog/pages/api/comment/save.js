/* 
Uses a given ID to update the corresponding document.
Request body example: Changing a comment's text to "Oops"
{
    "_id": "6351d6871586cb9e8425b18c",
    "text": "Oops"
}
*/

import connectMongo from '../../../utils/connectMongo';
import Comment from '../../../models/comment';

export default async function findVeneration(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('UPDATING DOCUMENT');
        const query = {"_id": req.body._id};
        res.json(await Comment.findOneAndUpdate(query, { $set: req.body}));
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

/*
BOILERPLATE FUNCTION
 const saveComment = async () => {
    console.log('SAVING COMMENT CHANGES');
    //!!!THIS WILL ALWAYS MAKE THIS SAME GUY. THIS IS BOILERPLATE. FILL IN OR REMOVE THESE FIELDS USING THE FRONTEND.!!!
    const parent = "6351d6871586cb9e8425b18c";
    const author = "Doe";
    const text = "Hubert";
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await fetch('/api/comment/save', {
      method: 'PUT',
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