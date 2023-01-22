import { Request, Response, NextFunction } from 'express-serve-static-core';

const Get = async (req: Request, res: Response, next: NextFunction) => {
  res.send('My Clan');
};

const MyClanController = {
  Get
};

export default MyClanController;
