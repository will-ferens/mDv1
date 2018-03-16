// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/memory1'
  },

  production: {
    client: 'postgresql',
    connection: process.env.NODE_ENV
  }
};
