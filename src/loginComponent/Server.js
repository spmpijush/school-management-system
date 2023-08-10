const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Endpoint
app.post('/api/mango', (req, res) => {
  const { mango_name, district, date, price } = req.body;
  
  const query = `INSERT INTO mangoes (mango_name, district, date, price) VALUES (?, ?, ?, ?)`;
  const values = [mango_name, district, date, price];
  
  db.query(query, values, (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Failed to insert data into the database' });
    } else {
      res.status(200).json({ message: 'Data inserted successfully' });
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
