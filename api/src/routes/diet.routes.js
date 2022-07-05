import { Router } from "express";
import { Diet } from "../database/db.js";
import { getDiets } from "../controllers/diet.controllers.js";

const router = Router()

router.get('/', getDiets)


// router.post('/', async (req, res, next) => {
//     const { name } = req.body;
//     try {
//         const newDiet = await Diet.create({name})
//         res.status(201).send(newDiet)
//     } catch (error) {
//         next(error)
//     }
// })

export default router;