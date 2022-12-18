import {Router} from "express";
import Pizza from "../models/pizzaModel.js";

const router = Router()

router.get('/getpizzas', async (req, res) => {
       try {
           const pizzas = await Pizza.find({})
              res.json(pizzas)
       }catch (e) {
           res.json({message: e.message})
       }
})

export default router
