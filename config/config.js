module.exports = {
    development: {
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || null,
      database: process.env.DB_DATABASE || 'database_development',
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 3306,
      dialect: 'mysql',
      dialectOptions: {
        connectTimeout: 60000
      },
      logging: console.log
    },
    test: {
      username: process.env.TEST_DB_USER || 'root',
      password: process.env.TEST_DB_PASSWORD || null,
      database: process.env.TEST_DB_DATABASE || 'database_test',
      host: process.env.TEST_DB_HOST || '127.0.0.1',
      port: process.env.TEST_DB_PORT || 3306,
      dialect: 'mysql'
    },
    production: {
      username: process.env.PROD_DB_USERNAME,
      password: process.env.PROD_DB_PASSWORD,
      database: process.env.PROD_DB_NAME,
      host: process.env.PROD_DB_HOSTNAME,
      port: process.env.PROD_DB_PORT || 3306,
      dialect: 'mysql',
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  };