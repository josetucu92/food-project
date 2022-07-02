import { Router } from "express";

const router = Router()

router.get('/', (req, res, next) => {
    //res.send('Soy la ruta country')
    try {
        throw new Error('Error de prueba')
    } catch (error) {
        next(error)
    }
        
})

export default router;