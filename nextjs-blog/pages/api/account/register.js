import connectMongo from '../../../utils/connectMongo';
import Account from '../../../models/account';

connectMongo()

export default async function handler (req,res){
    try{ 
        const account = await Account.create(req.body);
        res.redirect('/')
        if(!account){
            return res.json({"code":'User not created'})
        }
    } catch (error){
        res.status(400).json({status: 'Not able to make user'});
    }
}