import connectMongo from '../utils/connectMongo';
import Veneration from '../models/venModel';

export const getServerSideProps = async () => {
  try {
    console.log('CONNECTING TO MONGO');
    await connectMongo();
    console.log('CONNECTED TO MONGO');

    console.log('FETCHING DOCUMENTS');
    const vens = await Veneration.find();
    console.log('FETCHED DOCUMENTS');

    return {
      props: {
        vens: JSON.parse(JSON.stringify(vens)),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      notFound: true,
    };
  }
};