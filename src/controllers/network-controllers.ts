import { Request, Response } from 'express';
import httpStatus from 'http-status';
import credentialRepository from '../repositories/credential-repository/credential-repository.js'
import networkService from '../services/network-service/index.js'
import { AuthenticatedRequest } from '../middlewares/authentication-middleware.js';
import { CreateNetwork } from '../protocols.js'


export async function newNetwork(req: AuthenticatedRequest, res: Response) {
  const { title, network, password } = req.body as CreateNetwork
  const { userId } = req;

  const newNetwork = await networkService.newNetwork({ title, network, password, userId })

  try {
    return res.status(httpStatus.CREATED).send(newNetwork)

  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};

export async function getNetworks(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  const network = await networkService.getNetworks(userId);

  try {
    return res.status(httpStatus.OK).send(network)

  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getNetworksId(req: AuthenticatedRequest, res: Response) {


  try {
    return res.status(httpStatus.OK).send()

  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}


export async function deleteNetwork(req: AuthenticatedRequest, res: Response) {

  try {
    return res.sendStatus(httpStatus.OK);

  } catch (error) {    
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
};