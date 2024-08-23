const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the "expense-tracker" directory
app.use(express.static(path.join(__dirname, 'expense-tracker')));

// Route for the login page
app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'expense-tracker/login.html'));
});

// Route for the dashboard page
app.get('/dashboard.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'expense-tracker/dashboard.html'));
});

// Route for the index page (home page)
app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'expense-tracker/index.html'));
});

// Route for the expense history page
app.get('/expense-history.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'expense-tracker/expense-history.html'));
});

// Route for the root URL (redirect to index.html)
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

// Start the server
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
