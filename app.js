const express = require('express');
const app = express();
const port = 5000;

const rootModule = require('./routes/root');
const aboutModule = require('./routes/about');
const contactModule = require('./routes/contact');

app.get('/', (req, res) => {
  rootModule("John Smith", res);
});

app.get('/about', (req, res) => {
  aboutModule("John Smith", res);
});

app.get('/contact', (req, res) => {
  contactModule("John Smith", res);
});

app.get('/gallery', (req, res) => {
  res.send(`
    <h3>This is the Gallery Page</h3>
    <p>Name: Alimurung, Anne Nichole G. | Date: 2025-07-14 | Section: WD302</p>
  `);
});

app.use((req, res) => {
  res.status(404).send('Invalid Request');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
