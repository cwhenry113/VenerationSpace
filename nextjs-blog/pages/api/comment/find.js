/*
For finding by ID, please use findById.js instead.
Request body examples:

1. All comments belonging to a particular veneration
{
    "parent": "6351d6871586cb9e8425b18c"
}

2. All comments with the body "Rest in peace"
{
    "text": "Rest in peace"
}

3. All comments with a body similar to "Rest in peace"
{
    "text": /Rest in peace/i
}

4. All comments created between October 15 2022 and October 16 2022 
{
    "created_on": {
        $gte: new Date(2022, 10, 15), 
        $lt: new Date(2022, 10, 16)
    }
}
*/

import connectMongo from '../../../utils/connectMongo';
import Comment from '../../../models/comment';

export default async function findComment(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');

        console.log('FINDING DOCUMENT');
        const foundCom = await Comment.find(req.body).exec();
        res.json({ foundCom });
    } catch (error) {
        console.log(error);
        res.json({ error });
    }
}

/*
BOILERPLATE FUNCTION
 const findVeneration = async () => {
    console.log('FINDING COMMENT');
    //!!!THIS WILL ALWAYS DO THE SAME THING. THIS IS BOILERPLATE. FILL IN OR REMOVE THESE FIELDS USING THE FRONTEND.!!!
    const parent = "6351d6871586cb9e8425b18c";
    const author = "Phil";
    const text = "Comment text goes here";
    const creation_date = new Date("01/01/2021");
    const last_update = new Date("01/02/2021");
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const res = await fetch('/api/comment/find', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        parent: `${parent}`,
        author: `${author}`,
        text: `${text}`,
        createdAt: `${creation_date}`,
        updatedAt: `${last_update}`,
      }),
    });
    const data = await res.json();
    console.log(data);
  };
*/