import serverless from 'serverless-http';
import createExpressApp from './app';

// We need to define our function name for express routes to set the correct base path
const functionName = 'serverless-http';

// Initialize express app
const app = createExpressApp(functionName);

// Export lambda handler
exports.handler = serverless(app);
