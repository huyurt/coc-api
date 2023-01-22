import { Request, Response, NextFunction } from 'express-serve-static-core';

const Get = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Clans');
};

const ClansController = {
  Get
};

export default ClansController;
