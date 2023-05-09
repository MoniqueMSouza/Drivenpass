import { Request, Response } from 'express';
import httpStatus from 'http-status';
import usersService from '../services/users-service/index.js';

export async function signUp(req: Request, res: Response) {
    const { email, password } = req.body;
  
    try {
      const user = await usersService.signUp({ email, password });
      return res.status(httpStatus.CREATED).send("Create!")
    } catch (error) {
      if (error.name === 'DuplicatedEmailError') {
        return res.status(httpStatus.CONFLICT).send(error);
      }
      return res.status(httpStatus.BAD_REQUEST).send(error);
    }
  }

export async function signIn(req: Request, res: Response) {
    const { email, password } = req.body;
  
    try {
      const result = await usersService.signIn({ email, password });
  
      return res.status(httpStatus.OK).send(result);
    } catch (error) {
      return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
  }

