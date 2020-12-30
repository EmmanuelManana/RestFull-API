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

//get specific post, through a query parameter
router.get('/:postId', async (req,res) =>{

    try{
        const post = await Post.findById(req.params.postId)
        res.status(200).json(post)
    }catch(err){
        res.status(400).send({message: err})
    }
   
})

//delete a specific post
router.delete('/:postId', async (req,res) => {
    try {
        const post = await Post.remove({_id: req.params.postId});
    }catch(err){
        res.status(400).send({message: err})
    }
})

//Update a post by id
router.patch('/:postId', async (req,res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            { $set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch (err) {
        res.status(400).send({message: err})
    }
})

module.exports = router;