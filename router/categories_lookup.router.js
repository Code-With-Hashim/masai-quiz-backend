const express = require('express')

const { categories_lookup } = require('../modals/categories_lookup')

const categoriesLookupRouter = express.Router()


categoriesLookupRouter.get('/', async (req, res) => {
    try {
        const categoriesWiseData = await categories_lookup.find()

        res.send(categoriesWiseData)

    } catch (error) {
        console.log(error)
        res.status(404).send({
            msg: 'Something went wrong, please try again',
            stauts: false
        })

    }
})

module.exports = { categoriesLookupRouter }
