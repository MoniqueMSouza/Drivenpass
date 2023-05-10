import { Router } from "express";
import { validateSchema } from '../middlewares/validation-middleware.js';
import { networkSchema } from '../schemas/network-schemas.js'
import { newNetwork, getNetworks, getNetworksId, deleteNetwork } from "../controllers/network-controllers.js";
import { authenticateToken } from '../middlewares/authentication-middleware.js'

const networkRoutes = Router();

networkRoutes.all('/*', authenticateToken)
networkRoutes.get('/network', getNetworks);
networkRoutes.get('/network/:networkId', getNetworksId)
networkRoutes.post('/newnetwork', validateSchema(networkSchema), newNetwork)
networkRoutes.delete('/network/:networkId', deleteNetwork)



export default networkRoutes