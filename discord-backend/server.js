import express from 'express'
import mongoose from 'mongoose'

//app config
const app = express()
const port = process.env.PORT || 8002
//middlewares

//db config

//api routes
app.get('/', (req,res) => res.status(200).send('hello word'))
//listend
app.listen(port, () => console.log('listening on local host:${port}'))