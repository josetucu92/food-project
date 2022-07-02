import { Router } from "express";
import countryRoutes from './countryRoutes.js';
import activityRoutes from './activityRoutes.js';

const router = Router()

router.use('/country', countryRoutes);
router.use('/activity', activityRoutes);


export default router;