import { TokenIndexer } from 'morgan';
import http from 'http';

export const CustomLogger = (tokens: TokenIndexer, req: http.IncomingMessage, res: http.ServerResponse): string => {
  const log = [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ');

  if (process.env.NODE_ENV !== 'dev') {
    // Log only in AWS context to get back function logs
    console.log(log);
  }
  
  return log;
};
