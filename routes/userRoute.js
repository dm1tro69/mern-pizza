import {Router} from "express";
import User from "../models/userModel.js";

const router = Router()

router.post('/register', async (req, res) => {
    const {name, email, password, isAdmin} = req.body
     try {
         const user = await new User({
             name,
             email,
             password,
             isAdmin

         })
         await user.save()
         const token = user.createJWT()
         res.send('User Register successfully')
     }catch (e) {
        res.json({message: e.message})
         console.log(e.message)
     }
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        if(!email || !password){
            return res.json({message: 'User Login failed'})
        }
        const user = await User.findOne({email})
        if (!user){
            return res.json({message: 'Invalid Credentials'})
        }

        const isPasswordCorrect = await user.comparePassword(password)

        if (!isPasswordCorrect){
            return res.json({message: 'User Login failed'})
        }
        const token = user.createJWT()

        res.json({user, token})
    }catch (e) {
        res.json({message: e.message})
        console.log(e.message)
    }
})

export default router
