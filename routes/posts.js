const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async (req,res) =>{
   try{
       const post = await Post.find();
       res.status(200).json(post);
   }catch(err){
       res.status(200).json({message:err})
   }
})

router.post('/', async (req,res) =>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const savedPost = await post.save();
        res.status(200).json(savedPost)
    }catch(err){
        res.status(400).send('Bad request')
    }
})

module.exports = router;