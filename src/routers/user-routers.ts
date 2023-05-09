import { Router } from "express";
import { validateSchema } from '../middlewares/validation-middleware.js';
import {createUserSchema, loginSchema} from '../schemas/users-schemas.js'
import { signIn, signUp } from '../controllers/user-controllers.js';


const userRoutes = Router();

userRoutes.post('/signup', validateSchema(createUserSchema), signUp)
userRoutes.post('/signin', validateSchema(loginSchema), signIn)



export default userRoutes