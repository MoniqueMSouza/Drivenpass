import { Response } from 'express';
import httpStatus from 'http-status';
import credentialService from '../services/credentials-service/index.js'
import { AuthenticatedRequest } from '../middlewares/authentication-middleware.js';
import { CreateCredentialParams, CredentialInput } from '../protocols.js'


export async function newCredential(req: AuthenticatedRequest, res: Response) {
  const { title, url, username, password } = req.body as CreateCredentialParams
  const { userId } = req;

  try {
    const credential = await credentialService.newCredential({ title, url, username, password, userId })
    return res.status(httpStatus.CREATED).send(credential)

  } catch (error) {
    if (error.type === 'DuplicatedTitleError') {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

export async function getCredentials(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  try {  

    const credentials = await credentialService.getCredentials(userId)

    return res.status(httpStatus.OK).send(credentials)
} catch (error) {
    if (error.type === "NotFoundError") {
        return res.status(httpStatus.NOT_FOUND).send(error.message)
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
}
}

export async function getCredentialsById(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { credentialId } = req.params;

  try {
    const getCredentials = await credentialService.getCredentialsById(userId, parseInt(credentialId));

    return res.status(httpStatus.OK).send(getCredentials)

  } catch (error) {
    if (error.userId === 'ConflictError') {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function deleteCredentials(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { credentialId } = req.params;
  
  try {

    await credentialService.deleteCredential(userId, parseInt(credentialId));
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    if (error.type === "BadRequest") {
      return res.status(httpStatus.NOT_FOUND).send(error.message)
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
}
};