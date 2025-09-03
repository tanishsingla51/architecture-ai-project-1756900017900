import { Router } from 'express';
import * as postController from '../controllers/post.controller.js';

const router = Router();

export default (appRouter) => {
  appRouter.use('/posts', router);

  // GET all posts
  router.get('/', postController.getAllPosts);

  // CREATE a new post
  router.post('/', postController.createPost);

  // GET a single post by ID
  router.get('/:id', postController.getPostById);

  // UPDATE a post by ID
  router.put('/:id', postController.updatePost);

  // DELETE a post by ID
  router.delete('/:id', postController.deletePost);
};
