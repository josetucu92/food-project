import { Router } from "express";

const router = Router()

router.get('/', (req, res, next) => {
    res.send('Soy la ruta activity')
})

export default router;