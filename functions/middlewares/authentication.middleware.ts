import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from 'axios';

export const Authentication = (req: Request, res: Response, next: NextFunction) => {
  if (req.get('Api-Key') !== process.env.AUTH_API_KEY) {
    res.status(HttpStatusCode.Unauthorized).json({ message: 'Api key is invalid!' });
  } else {
    next();
  }
};
