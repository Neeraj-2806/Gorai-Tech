const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'db',         // 'db' is the service name in docker-compose
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'Neeraj123',
  database: process.env.DB_NAME || 'userdb'
});

connection.connect(err => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err.message);
    process.exit(1); // Exit if connection fails
  }
  console.log('✅ Connected to MySQL');
});

module.exports = connection;
