const express = require('express')
const {Model}=require('mongoose')
const router = express.Router()
const ReviewModel = require('../Model/review.model')
router.post('/',(req,res)=>{
    let newReview = new ReviewModel({
        name:req.body.name,
        review:req.body.review,
        rating:req.body.rating
    })
    newReview.save()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
})
router.get('/',(req,res)=>{
    ReviewModel.find()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>
        res.send(err))
})
module.exports=router