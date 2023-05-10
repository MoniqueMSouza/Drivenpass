import { Router } from 'express';
import userRoutes from './user-routers.js';
import credentialRoutes from './credential-routers.js'
import networkRoutes from './network-routes.js'

const router = Router();

router.use(userRoutes);
router.use(credentialRoutes);
router.use(networkRoutes);

export default router;
