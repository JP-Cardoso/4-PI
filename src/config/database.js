require('dotenv').config();
module.exports = {
    logging: console.log,
    dialect: process.env.DB_DIALECT, 
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS, 
    database: process.env.DB_NAME, 
    define: {
        timestamps: true,
        underscored: true,
    },
    dialectOptions: {
        ssl: process.env.DB_SSL ? {
          require: true,
          rejectUnauthorized: false, // use this if you don't have a CA or self-signed certificate
          ca:  process.env.DB_SSL,
        } : null,
      },
};
