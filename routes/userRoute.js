const express = require('express');
const router = express.Router();
const User = require('../models/user');  //import user schema from models

//GET ALL USERS
router.get('/',async(req,res)=>{
  try{
      const allUsers = await User.find();
      res.status(202).json(allUsers);
  }catch(err){
      res.status(404).json({message: err});
  }
});

//GET SPECIFIC USER
router.get('/:id', async(req,res)=>{
    try{
        const specificUser = await User.findById({_id:req.params.id});
        res.status(200).json(specificUser);
        //console.log(specificUser)
    }catch(err){
        res.status(404).json({message: err});
    }
})

//REGISTER USER 
router.post('/register',async(req,res)=>{
  const newUser = new User({
      name:req.body.name,
      email:req.body.email
  });
  try{
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
  }catch(err){
      res.status(404).json({message: err});
  }
});

//UPDATE USER DETAILS
router.patch('/:id',async(req,res)=>{
    try{
        const updateUser = await User.updateOne({_id:req.params.id},
            {$set: {name:req.body.name,  
                     email:req.body.email}}
            );
            res.status(200).json(updateUser);
    }catch(err){
        res.status(404).json({message: err});
    }
});

//DELETE USER
router.delete('/:id', async(req,res)=>{
    try{
        const removeUser = await User.remove({_id:req.params.id});
        res.status(200).json(removeUser);
    }catch(err){
        res.status(404).json({message: err});
    }
})

module.exports = router;