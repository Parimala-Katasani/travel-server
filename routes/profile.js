const express = require('express')
const {Model}=require('mongoose')
const router = express.Router()
const ProfileModel = require('../Model/profile.model')
router.post('/',(req,res)=>{
    let newProfile = new ProfileModel({
        name:req.body.name,
        dest:req.body.dest,
        people:req.body.people,
        date:req.body.date,
        guide:req.body.guide,
        safari:req.body.safari,
        food:req.body.food
    })
    newProfile.save()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.get('/',(req,res)=>{
    ProfileModel.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>
        res.send(err))
})
router.put('/:id',(req,res)=>{
    const idQuery=req.params.id
    ProfileModel.findByIdAndUpdate(idQuery,{$set:req.body})
    .then(response=>{
        res.send(response)
    })
    .catch(err=>
        res.send(err))
})
router.delete('/:id',(req,res)=>{
    const idQuery=req.params.id
    ProfileModel.findByIdAndDelete(idQuery)
    .then(response=>{
        res.send(response)
    })
    .catch(err=>
        res.send(err))
})
module.exports=router