/**
 * Created by Joshua Baert on 07/31/2017.
 */


const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');


const config = require('./config');


const app = express();


app.use(express.static('./public/last-dist'));
app.use(bodyParser.json());
app.use(cors());

app.listen(config.port,()=>{
	console.log('listening on port ' + config.port )
});