const { Pool } = require('pg');
const pool = new Pool();

pool.connect()
  .then(() => console.log('✅ Connected to PostgreSQL'))
  .catch(err => {
    console.error('❌ DB connection error:', err);
    process.exit(1);
  });

module.exports = {
  query: (text, params) => pool.query(text, params),
};
