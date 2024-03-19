const express = require('express');
const PORT = 3001;

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('helloworld.ejs');
})

app.get('/hello/:name', (req, res) => {
  const name = req.params.name;
  res.status(200).end(`<!DOCTYPE html>
    <html>
      <head><title>Hello, ${name}!</title></head>
      <body><h1>Hello, ${name}!</h1></body>
    </html>
  `);
});

app.listen(PORT, ()=> {console.log('App listening at Port 3001!')});


