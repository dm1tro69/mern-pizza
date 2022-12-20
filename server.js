import express from 'express'
import mongoose from "mongoose";
import dotenv from 'dotenv'
import Pizza from "./models/pizzaModel.js";
import pizzaRoute from "./routes/pizzaRoute.js";
import userRoute from "./routes/userRoute.js";
import orderRoute from "./routes/orderRoute.js";


dotenv.config()
const app = express()
app.use(express.json())
mongoose.set('strictQuery', false)

const PORT = 4000

app.use('/api/pizzas', pizzaRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)

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
