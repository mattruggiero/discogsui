const express = require('express');
const app = express();
const API = require('./config/keys').API_KEY;
const API_KEY = process.env.API_KEY || API;
const Discogs = require('disconnect').Client;
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/*+json'}))

//routes
const search = require('./routes/search');
const artist = require('./routes/artist');
const master = require('./routes/master');
const label = require('./routes/label');
const release = require('./routes/release');




let dis = new Discogs({userToken: API_KEY});
dis.setConfig({userAgent: "myDiscogsProggy/0.1 +http://inDevelopment.com"})


//use routes 
app.use('/search', search);
app.use('/artist', artist);
app.use('/master',master);
app.use('/release',release);
app.use('/label',label);

// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}

// app.get('*',(req,res,  next) => {
//     console.log(API);
//     next();
// })

// app.get('/',(req,res) => {
//     res.send("SERVER RUNNING");
// })





    


const port = process.env.PORT || 80;

app.listen(port, ()=> console.log(`Server running on port ${port}`));

