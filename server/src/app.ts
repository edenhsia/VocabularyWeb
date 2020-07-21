import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';

import debug from './config/debug';

import categoryRouter from './routes/category';

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

app.use(helmet());

/**
 * https://www.npmjs.com/package/morgan
 * dev
 * :method :url :status :response-time ms - :res[content-length]
 *
 * combined
 * :remote-addr - :remote-user [:date[clf]]
 * ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"
 */
app.use(logger(process.env.LOGGER || 'dev'));

/**
 * for big data use
 * https://stackoverflow.com/questions/19917401/error-request-entity-too-large
 * https://expressjs.com/en/4x/api.html
 */
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cookieParser());

app.use('/api/categorys', categoryRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((
  err: { stack: string; status: number; message: string; },
  req: unknown,
  res: { status: (arg0: number) => void; json: (arg0: unknown) => void; },
) => {
  if (!isProduction) {
    debug(err.stack);
  }

  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: isProduction ? {} : err,
    },
  });
});

export default app;
