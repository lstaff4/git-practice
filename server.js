const express = require('express');
const PORT = 2999;

const app = express();
app.listen(PORT, ()=> {console.log('App listening at Port 2999!')});