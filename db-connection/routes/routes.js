const express = require('express');
const router = express.Router()
module.exports = router;
const Model = require('../models/model');
const Comment = require('../models/comments');
const Accounts = require('../models/accounts');


//Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        fullName: req.body.fullName,
        bio: req.body.bio,
        birthDate: req.body.birthDate,
        deathDate: req.body.deathDate,
        pictureURL: req.body.pictureURL,
        guardianUser: req.body.guardianUser,
        dateCreated: req.body.dateCreated,
        dateUpdated: req.body.dateUpdated
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Get all Method
router.get('/getAll/:id', async (req, res) => {
    try{
        const regex =  new RegExp(req.params.id,'i');
        const data = await Model.find({"fullName":regex});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})
//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`${data.name}'s page has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Get by ID Method
router.get('/getComments/:id', async (req, res) => {
    try{
        const data = await Comment.find({"parent":req.params.id});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

router.post('/postComment', async (req, res) => {
    const data = new Comment({
        parent: req.body.parent,
        author: req.body.author,
        text: req.body.text
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.delete('/deleteComment/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Comment.findByIdAndDelete(id)
        res.send(`${data.name}'s comment has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

router.post('/postUser', async (req, res) => {
    const data = new Accounts({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        name: req.body.name,
        admin: "false"
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
        console.log(error)
    }
})