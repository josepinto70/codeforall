const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Your MySQL username
  password: '', // Your MySQL password
  database: 'gps_tracks',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL database');
});

// Route to save location data
app.post('/save-location', (req, res) => {
  const { lat, lon } = req.body;

  // Validate the incoming data
  if (typeof lat === 'number' && typeof lon === 'number') {
    const query = 'INSERT INTO locations (latitude, longitude) VALUES (?, ?)';
    db.query(query, [lat, lon], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Database error' });
      } else {
        res.status(200).json({ message: 'Location saved successfully' });
      }
    });
  } else {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
