const mongoose=require('mongoose')
const reviewSchema=mongoose.Schema({
    name:String,
    review:String,
    rating:String
})
const reviewModel=mongoose.model('reviews',reviewSchema)
module.exports=reviewModel