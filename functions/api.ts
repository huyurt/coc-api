import dotenv from 'dotenv';
import serverless from 'serverless-http';
import { Settings } from 'luxon';
import { CreateExpressApp } from './configs/app';

dotenv.config();

Settings.defaultLocale = process.env.LOCALE || 'en-GB';

// We need to define our function name for express routes to set the correct base path
const functionName = 'api';

// Initialize express app
const app = CreateExpressApp(functionName);

// Export lambda handler
exports.handler = serverless(app);
