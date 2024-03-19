const express = require('express');
const PORT = 3001;

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('helloworld.ejs');
})

app.listen(PORT, ()=> {console.log('App listening at Port 3001!')});