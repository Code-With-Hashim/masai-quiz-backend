require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { connect } = require('./config/db')
const { categoriesLookupRouter } = require('./router/categories_lookup.router')
const { categoriesWiseRouter } = require('./router/categories_wise.router')

const PORT = process.env.PORT

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.use("/categorywise", categoriesWiseRouter)
app.use("/categorylookup", categoriesLookupRouter)

app.get('/', (req, res) => res.send({ message: 'Hello World' }))
app.listen(PORT, async () => {

    try {

        await connect
        console.log('Database is connected successfully')
        console.log(`Listening on http://localhost:${PORT}`)

    } catch (error) {
        console.log(error)
    }

})