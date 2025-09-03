import posts from '../models/post.model.js';

let nextId = posts.length + 1;

// Service to find all posts
export const findAll = () => {
  return posts;
};

// Service to find a post by its ID
export const findById = (id) => {
  return posts.find(post => post.id === parseInt(id));
};

// Service to create a new post
export const create = (postData) => {
  const newPost = {
    id: nextId++,
    ...postData,
    createdAt: new Date().toISOString(),
  };
  posts.push(newPost);
  return newPost;
};

// Service to update an existing post
export const update = (id, updateData) => {
  const postId = parseInt(id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return null; // Post not found
  }

  const originalPost = posts[postIndex];
  const updatedPost = {
    ...originalPost,
    ...updateData,
    id: postId, // Ensure ID is not changed
  };

  posts[postIndex] = updatedPost;
  return updatedPost;
};

// Service to remove a post by its ID
export const remove = (id) => {
  const postId = parseInt(id);
  const postIndex = posts.findIndex(p => p.id === postId);

  if (postIndex === -1) {
    return false; // Post not found
  }

  posts.splice(postIndex, 1);
  return true; // Deletion successful
};
