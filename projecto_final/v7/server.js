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
  user: 'root',  // Replace with your MySQL username
  password: '',  // Replace with your MySQL password
  database: 'gps_locations',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Route to save pinpoints data
app.post('/save-pinpoints', (req, res) => {
  const pinpoints = req.body.pinpoints;

  // Validate that pinpoints is an array and contains valid data
  if (Array.isArray(pinpoints) && pinpoints.length > 0) {
    // Insert each pinpoint into the database
    pinpoints.forEach((pinpoint) => {
      const { lat, lon } = pinpoint;

      if (typeof lat === 'number' && typeof lon === 'number') {
        const query = 'INSERT INTO pinpoints (latitude, longitude) VALUES (?, ?)';
        db.query(query, [lat, lon], (err, result) => {
          if (err) {
            console.error('Database error:', err);
          }
        });
      }
    });

    res.status(200).json({ message: 'Pinpoints saved successfully' });
  } else {
    res.status(400).json({ error: 'Invalid pinpoints data' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
