import { Router } from 'express';
import postRoutes from './post.routes.js';

export default () => {
  const router = Router();

  // Mount the post routes
  postRoutes(router);

  return router;
};
