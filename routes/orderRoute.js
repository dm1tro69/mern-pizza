import {Router} from "express";

const router = Router()

router.post('/placeorder', async (req, res) => {
    try {

    }catch (e) {
        res.json({message: e.message})
    }
})

export default router
