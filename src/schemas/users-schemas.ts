import Joi from 'joi';
import { UserInput } from "../protocols";

export const createUserSchema = Joi.object<UserInput>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
});

export const loginSchema = Joi.object<UserInput>({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})