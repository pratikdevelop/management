'use strict';

const express = require('express');
const path = require('path');
const db = require('./models/index'); // Import the db object from models/index.js
const router = require('./routes/index');

var cors = require('cors')
var app = express()

app.use(cors())

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Explicitly set views directory (optional)

// Set routing
app.use('/', router);

// Sync Sequelize Models & Create Tables (if not exist)
const syncDatabase = async () => {
  try {
    await db.sequelize.sync({ force: false }); // Use db.sequelize instead of raw sequelize
    console.log('✅ Database synced with Sequelize');
  } catch (err) {
    console.error('❌ Sequelize sync error:', err);
    process.exit(1); // Exit on failure to ensure server doesn’t run with a bad DB
  }
};

// Start Server
const PORT = 4500;
const startServer = async () => {
  await syncDatabase(); // Sync DB before starting the server
  app.listen(PORT, () => {
    console.log(`🚀 Server started successfully on port ${PORT}`);
  });
};

startServer();