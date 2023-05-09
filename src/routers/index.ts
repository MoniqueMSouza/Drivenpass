import { Router } from 'express';
import userRoutes from './user-routers.js';

const router = Router();

router.use(userRoutes);

export default router;
