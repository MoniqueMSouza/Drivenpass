import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import * as jwt from 'jsonwebtoken';
import userRepositories from '../repositories/user-repository/user-repositories';

export async function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {

 const {authorization} = req.headers
  if (!authorization) return res.status(httpStatus.UNAUTHORIZED).send("Invalid Token! 1 ");

  const parts = authorization.split(" ");
  if (parts.length !== 2) return res.status(httpStatus.UNAUTHORIZED).send("Invalid Token! 2 ");

  const [schema, token] = parts;
  if (schema !== "Bearer") return res.status(httpStatus.UNAUTHORIZED).send("Invalid Token! 3 ");


  try {
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JWTPayload;
  
    req.userId = userId;

   return next();
  } catch (err) {
    return res.status(httpStatus.BAD_REQUEST).send({err});
  }
  };



export type AuthenticatedRequest = Request & JWTPayload;

type JWTPayload = {
  userId: number;
}



