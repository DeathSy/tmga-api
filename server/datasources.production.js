'use strict';

module.exports = {
  mongodbDS: {
    connector: 'mongodb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 27017,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
