const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categories_lookup = mongoose.model('categories_lookup' , new Schema({
    id : {type : String},
    name : {type : String}
}))


module.exports = {categories_lookup}