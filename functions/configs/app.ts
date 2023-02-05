import express, { Express } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compression from 'compression';
import { CustomLogger } from '../middlewares/logging.middleware';
import { Authentication } from '../middlewares/authentication.middleware';
import { ClansRoute } from '../routes/clans.route';
import { MyClanRoute } from '../routes/my-clan.route';

export const CreateExpressApp = (functionName: string): Express => {
  const app = express();
  const router = express.Router();

  // gzip responses
  router.use(compression());

  // Set router base path for local dev
  const routerBasePath = process.env.NODE_ENV === 'dev' ? `/${functionName}` : `/.netlify/functions/${functionName}/`;

  ClansRoute(router);
  MyClanRoute(router);

  // Attach logger
  app.use(morgan(CustomLogger));

  // Authorization
  app.use(Authentication);

  // Setup routes
  app.use(routerBasePath, router);

  // Apply express middlewares
  router.use(cors());
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));

  app.listen(9000, () => {
    console.log("info", 'Server is running at port : ' + 9000);
  });

  return app;
};
