export default () => ({
  enviroment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASES_HOST,
    port: parseInt(process.env.DATABASES_PORT, 10) || 5432,
  },
});
