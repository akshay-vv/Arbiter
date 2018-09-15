const express = require('express')
const cloudscraper = require('cloudscraper')    // Avoids CloudFlare's DDoS protection page

// Data Source
const koinexPath = 'https://koinex.in/api/ticker';
// const coinbasePath = '';

// Data Sink
// MongoDb

// Locals to this file
const app = express()
var KoinexData;

// Fetch
cloudscraper.get(koinexPath, 
    (err, res, body) => {
        if (err) {
            console.log('fetch error '+ err);
        } else {
            console.log('res '+res +' body'+body);
        }
});

// Process


// Store


// Expose for Angular to consume
// '/'
// '/btcusd'
// '/btcinr'
// '/arbitrage'
app.get('/', (req, res) => res.send(KoinexData))

app.listen(3000, () => console.log('App Running'))
