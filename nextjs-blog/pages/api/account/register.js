import connectMongo from '../../../utils/connectMongo';
import Account from '../../../models/account';

connectMongo()

export default async function handler (req,res){
    try{ 
        const account = await Account.create({
            "username": req.body.username,
            "password": req.body.password,
            "email": req.body.email,
            "name": req.body.name,
            "admin": "false",
        });
        res.redirect('/statpages/login/')
        if(!account){
            res.redirect('/statpages/signup/')
        }
    } catch (error){
        res.redirect('/statpages/signup/')
    }
}