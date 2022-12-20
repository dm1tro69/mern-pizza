import {Router} from "express";
import Stripe from 'stripe'
const stripe = Stripe(process.env.STRIPE)
import {v4 as uuidv4} from 'uuid'

const router = Router()

router.post('/placeorder', async (req, res) => {
    const {token, subTotal, currentUser, cartItems} = req.body
    try {
          const costumer = await stripe.customers.create({
              email: token.email,
              source: token.id
          })
        const payment = await stripe.charges.create({
            amount: subTotal*100,
            currency: 'USD',
            customer: costumer.id,
            receipt_email: token.email
        }, {
            idempotencyKey: uuidv4()
        })
        if (payment){
            res.send('Payment Done')
        } else {
            res.send('Payment Fail')
        }
    }catch (e) {
        res.json({message: e.message})
    }
})

export default router
