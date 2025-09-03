import * as postService from '../services/post.service.js';

// Controller to get all posts
export const getAllPosts = (req, res, next) => {
  try {
    const posts = postService.findAll();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

// Controller to create a new post
export const createPost = (req, res, next) => {
  try {
    const { title, content, author } = req.body;
    if (!title || !content) {
      const err = new Error('Title and content are required');
      err.status = 400;
      throw err;
    }
    const newPost = postService.create({ title, content, author });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

// Controller to get a single post by its ID
export const getPostById = (req, res, next) => {
  try {
    const { id } = req.params;
    const post = postService.findById(id);
    if (!post) {
      const err = new Error('Post not found');
      err.status = 404;
      throw err;
    }
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

// Controller to update an existing post
export const updatePost = (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content, author } = req.body;
    const updatedPost = postService.update(id, { title, content, author });
    if (!updatedPost) {
      const err = new Error('Post not found');
      err.status = 404;
      throw err;
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

// Controller to delete a post
export const deletePost = (req, res, next) => {
  try {
    const { id } = req.params;
    const success = postService.remove(id);
    if (!success) {
      const err = new Error('Post not found');
      err.status = 404;
      throw err;
    }
    res.status(204).send(); // No Content
  } catch (error) {
    next(error);
  }
};
