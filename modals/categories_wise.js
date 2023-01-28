const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categories_wise = mongoose.model('categories_wise' , new Schema({
    category: { type: String },
    type: { type: String },
    difficulty: { type: String },
    question: { type: String },
    correct_answer: { type: String },
    category_id : {type : Number},
    incorrect_answers: []
}))

module.exports = { categories_wise }