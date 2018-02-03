//server.js
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, 'build')));

//设置可访问的静态资源目录 
app.get('/', (req, res, next) => {
  req.url = 'index.html';
  next();
})

app.listen(port, () => {
  console.log(`server is running at ${port}`)
});