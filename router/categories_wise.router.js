const express = require('express')

const { categories_wise } = require('../modals/categories_wise')

const categoriesWiseRouter = express.Router()


categoriesWiseRouter.get('/', async (req, res) => {

    const {category , difficulty , amount} = req.query


    try {

        const categoriesWiseData = await categories_wise.find({category_id : category , difficulty}).limit(amount)

        res.send(categoriesWiseData)
        console.log(categoriesWiseData.length)

    } catch (error) {
        console.log(error)
        res.status(404).send({
            msg: 'Something went wrong, please try again',
            stauts: false
        })

    }
})

module.exports = { categoriesWiseRouter }
