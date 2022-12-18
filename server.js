import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
const app = express()
mongoose.set('strictQuery', false)

const PORT = 4000

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_PASS, ()=> {
            console.log('db connect')
            app.listen(PORT, () => {
                console.log('server')
            })

        })
    }catch (e) {
        console.log(e)
    }
}

start()
