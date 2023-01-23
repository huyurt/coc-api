import { Request, Response, NextFunction } from 'express-serve-static-core';

export const Get = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Clans');
};
