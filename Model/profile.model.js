const mongoose = require('mongoose')
const profileSchema = mongoose.Schema({
    name:String,
    dest:String,
    people:String,
    date:String,
    guide:String,
    safari:String,
    food:String

})
const ProfileModel = mongoose.model('profiles',profileSchema) //collection name
module.exports=ProfileModel

