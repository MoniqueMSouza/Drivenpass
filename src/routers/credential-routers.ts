import { Router } from "express";
import { validateSchema } from '../middlewares/validation-middleware.js';
import { credentialSchema } from '../schemas/credential-schemas.js'
import { newCredential, getCredentials, deleteCredentials, getCredentialsById } from "../controllers/credential-controllers.js";
import { authenticateToken } from '../middlewares/authentication-middleware.js'

const credentialRoutes = Router();

credentialRoutes.all('/*', authenticateToken)
credentialRoutes.get('/credentials', getCredentials);
credentialRoutes.get('/credentials/:credentialId', getCredentialsById)
credentialRoutes.post('/newcredential', validateSchema(credentialSchema), newCredential)
credentialRoutes.delete('/credentials/:credentialId', deleteCredentials)



export default credentialRoutes