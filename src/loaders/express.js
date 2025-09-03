import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import apiRoutes from '../api/routes/index.js';
import errorHandler from '../api/middlewares/errorHandler.js';

export default async (app) => {
  // Health Check endpoint
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  // Useful middlewares
  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Load API routes
  app.use('/api', apiRoutes());

  // Error handling middleware
  app.use(errorHandler);

  return app;
};
