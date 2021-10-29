const express = require('express');
const path = require('path');

const app = express();

// const myLogger = (req, res, next) => {
//   console.log('Middleware Log 1');
//   next();
// };

// const myLogger2 = (req, res, next) => {
//   console.log('Middleware Log 2');
//   next();
// };
// app.use(myLogger);
// app.use(myLogger2);

// MIDDLEWARES
app.use(express.static('public'));

app.get('/', (req, res) => {
  // const photo = {
  //   id: 1,
  //   name: 'Photo Name',
  //   description: 'Photo Description',
  // };
  // res.send(photo);
  res.sendFile(path.resolve(__dirname, 'temp/index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server has been bounded at ${port}`);
});
