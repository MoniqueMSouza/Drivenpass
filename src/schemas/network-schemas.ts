import Joi from 'joi';
import { CreateNetwork } from "../protocols";

export const networkSchema = Joi.object<CreateNetwork>({
    title: Joi.string().required(),
    network: Joi.string().required(),
    password:Joi.string().required(),
});