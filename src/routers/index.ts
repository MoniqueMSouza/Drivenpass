import { Router } from 'express';
import userRoutes from './user-routers.js';
import credentialRoutes from './credential-routers.js'

const router = Router();

router.use(userRoutes);
router.use(credentialRoutes);

export default router;
