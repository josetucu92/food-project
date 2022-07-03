import { Router } from "express";
import { Diet } from "../database/db.js";

const router = Router()

router.get('/', async (req, res, next) => {
    try {
        const diets = await Diet.findAll()
        res.status(200).send(diets)
    } catch (error) {
        next(error)
    }
})


router.post('/', async (req, res, next) => {
    const { name } = req.body;
    try {
        const newDiet = await Diet.create({name})
        res.status(201).send(newDiet)
    } catch (error) {
        next(error)
    }
})

export default router;