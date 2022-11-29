import connectMongo from '../../../utils/connectMongo';
import Account from '../../../models/account';

connectMongo()

export default async function handler (req,res ){

    try{ 
        const user = await Account.findOne({"username": "test", "password": "test"});
        
        if(!user){
            return res.json({"code":'User not there'})
        }
        else{
            
            console.log(user.admin);
        }
    } catch (error){
        res.status(400).json({status: 'Not able to make user'});
    }
}