const express = require('express');
const router = express.Router();

const API = require('../config/keys').API_KEY;
const API_KEY = process.env.API_KEY || API;


//redo with OAUTH
const Discogs = require( 'disconnect' ).Client;
let dis = new Discogs({userToken: API_KEY});
let discogsDB = dis.database();



router.route('*').all((req, res, next)=>{
    console.log('Search Works: '+req.originalUrl);
    next();
})
.post((req,res) => {
    let bandname = req.body.id;
    let filter = req.body.filter.toLowerCase();
    discogsDB.search(
        bandname,
        {page: 1, 
            per_page: 25,
            type: filter}, (err,data) =>{
        if(err)
            console.log(err)
        else
            res.send(data);
    })
})





module.exports = router;