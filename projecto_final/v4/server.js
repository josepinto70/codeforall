// server.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Create express app
const app = express();
const port = 3000;

// MySQL connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // Replace with your MySQL username
    password: '',      // Replace with your MySQL password
    database: 'gps_tracks',
});

// Connect to the MySQL database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Route to store GPS coordinates
app.post('/store-gps', (req, res) => {
    const { latitude, longitude } = req.body;

    const query = 'INSERT INTO track_data (latitude, longitude) VALUES (?, ?)';
    connection.execute(query, [latitude, longitude], (err, results) => {
        if (err) {
            console.error('Error storing GPS data:', err);
            return res.status(500).json({ error: 'Failed to store GPS data' });
        }
        res.status(200).json({ message: 'GPS data stored successfully', id: results.insertId });
    });
});

// Route to retrieve all stored GPS coordinates
app.get('/get-gps', (req, res) => {
    const query = 'SELECT * FROM track_data';
    connection.execute(query, (err, results) => {
        if (err) {
            console.error('Error fetching GPS data:', err);
            return res.status(500).json({ error: 'Failed to fetch GPS data' });
        }
        res.status(200).json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
