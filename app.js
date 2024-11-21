require('dotenv').config();
const express = require('express');
const cors = require('cors');
const poolRoutes = require('./routes/poolRoutes'); // Routes untuk CRUD kolam renang
const db = require('./database/db'); // Koneksi database

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Static Files
app.use(express.static('public'));

// Test Database Connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.use('/pools', poolRoutes); // CRUD routes untuk pools

app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Pool Management System' });
});

// Server Listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
