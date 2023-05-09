import Joi from 'joi';
import { CreateCredentialParams } from "../protocols";

export const credentialSchema = Joi.object<CreateCredentialParams>({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    username: Joi.string().required(),
    password:Joi.string().required(),
});