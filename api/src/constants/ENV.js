module.exports = {
  MONGODB_HOST: process.env.MONGODB_HOST,
  MONGODB_USER: process.env.MONGO_INITDB_ROOT_USERNAME,
  MONGODB_PASSWORD: encodeURIComponent(process.env.MONGO_INITDB_ROOT_PASSWORD),
  MONGODB_DATABASE: process.env.NODE_ENV === 'development' ? 'dev-todo-app' : 'todo-app',
};
