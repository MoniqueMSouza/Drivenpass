import { Request, Response } from 'express';
import httpStatus from 'http-status';
import credentialRepository from '../repositories/credential-repository/credential-repository.js'
import credentialService from '../services/credentials-service/index.js'
import { AuthenticatedRequest } from '../middlewares/authentication-middleware.js';
import { CreateCredentialParams, CredentialInput } from '../protocols.js'


export async function newCredential(req: AuthenticatedRequest, res: Response) {
  const { title, url, username, password } = req.body as CreateCredentialParams
  const { userId } = req;

  const credential = await credentialService.newCredential({ title, url, username, password, userId })

  try {    

    return res.status(httpStatus.CREATED).send(credential)
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

export async function getCredentials(req: AuthenticatedRequest, res: Response) {
 const { userId } = req;

  const getCredentials = await credentialRepository.getCredentials(userId);

  try {
    return res.status(httpStatus.OK).send(getCredentials)
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getCredentialsId(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { credentialId } = req.params;

  const getCredentials = await credentialRepository.getCredentialsById(userId, parseInt(credentialId));

  try {
    return res.status(httpStatus.OK).send(getCredentials)
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}


export async function deleteCredentials(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { credentialId } = req.params;
  
  await credentialService.deleteCredential(userId, parseInt(credentialId));
  try {
    
    return res.sendStatus(httpStatus.OK);
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};