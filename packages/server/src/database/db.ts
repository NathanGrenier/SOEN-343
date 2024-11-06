import sql from 'mssql';

const dbConfig = {
  server: "sql.bsite.net\\MSSQL2016",
  database: "hexad_",
  user: "hexad_",
  password: "hexad2024",
  port: 1433,
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

// Connect to MSSQL Database
const pool = new sql.ConnectionPool(dbConfig);

pool.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });

export default pool;
