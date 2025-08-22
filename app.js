require('dotenv').config();
const express = require('express');
const cors = require('cors');
const poolRoutes = require('./routes/poolRoutes'); // Routes untuk CRUD kolam renang
const db = require('./database/db'); 

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true })); // Untuk menangani data form
app.use(express.json()); // Untuk menangani data JSON

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

// Test Database Connection
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Routes
app.use('/pools', poolRoutes); // Semua endpoint untuk kolam renang ada di bawah /pools

// Root Endpoint
app.get('/', (req, res) => {
  res.redirect('/pools'); // Redirect ke halaman utama pools
});

// Server Listening
const PORT = process.env.PORT || 3030; // Gunakan port dari .env atau default 3030
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
