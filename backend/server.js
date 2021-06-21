const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
require('./Db/connection.js');

const cors =require('cors');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
var home =require('./router/home.js');
app.get('/',home);
app.post('/',home);
app.delete('/',home);
app.patch('/',home);

var countryname=require('./router/countryname')
app.get('/countryname',countryname);

var delivery=require('./router/deliverytime')
app.post('/deliverytime',delivery);

app.listen(port,()=>{
    console.log(`Listening on Port: ${port}`);
})