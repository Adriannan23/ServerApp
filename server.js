const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.show = (name) => {
    res.sendFile(path.join(__dirname, `views/${name}`));
  };
  next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.show('home.html');
});

app.get('/about', (req, res) => {
  res.show('about.html');
});

app.use('/user', (req, res, next) => {
  res.show('forbidden.html');
});

app.use((req, res, next) => {
  res.status(404).show('404.html');
});

app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'your_image.jpg'));
});

app.listen(8001, () => {
  console.log('Server is running on port: 8001');
});