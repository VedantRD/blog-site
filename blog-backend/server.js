// =============== Requiring necessary modules ================ //
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config({ path: 'config.env' })
const compression = require('compression')

// ============== server setup ============== // 
const app = express()
app.use(cors())
app.use(express.json())
app.listen(process.env.PORT, () => {
    console.log('server started on port 5000')
})


app.use('/', require('./routes/postRoutes'))
app.use(compression())
// app.use('/posts', require('./routes/postRoutes'))

// =============== mongoose setup for Mongo DB ================== //
mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false }, (err) => {
    if (err) {
        return console.error('Something went wrong')
    }
    console.log('DB connection successful')
})