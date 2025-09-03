// This file would typically define a database schema (e.g., with Mongoose or Sequelize).
// For this example, we'll use a simple in-memory array as a mock database.

const posts = [
  {
    id: 1,
    title: 'Hello World',
    content: 'This is the first post in our blog!',
    author: 'Admin',
    createdAt: new Date('2023-01-01T12:00:00Z').toISOString(),
  },
  {
    id: 2,
    title: 'Express.js is Awesome',
    content: 'Learn how to build powerful APIs with Express.',
    author: 'DevUser',
    createdAt: new Date('2023-01-02T15:30:00Z').toISOString(),
  }
];

export default posts;
