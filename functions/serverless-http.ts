import serverless from 'serverless-http';
import { CreateExpressApp } from './configs/app';

// We need to define our function name for express routes to set the correct base path
const functionName = 'serverless-http';

// Initialize express app
const app = CreateExpressApp(functionName);

// Export lambda handler
exports.handler = serverless(app);
