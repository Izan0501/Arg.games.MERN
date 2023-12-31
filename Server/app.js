// dependencies node.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


require('dotenv').config();
const apiVersion = process.env.API_VERSION

// create app
const app = express();

//config header HTTP - CORS - SecurityMethod/Middleware
app.use(cors());

// import routes
const authRoutes = require('./router/auth');
const userRoutes = require('./router/user');
const productRoutes = require('./router/product');
const productsPs4Routes = require('./router/productsPs4');
const productsXboxRoutes = require('./router/productsXbox');
//config body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//config static folder
app.use(express.static('uploads'));  

//config routes
app.use(`/api/${apiVersion}`, authRoutes);// http://localhost:3977/api/v1/auth/register
app.use(`/api/${apiVersion}`, userRoutes);// http://localhost:3977/api/v1/auth/user/me
app.use(`/api/${apiVersion}`, productRoutes);
app.use(`/api/${apiVersion}`, productsPs4Routes);
app.use(`/api/${apiVersion}`, productsXboxRoutes);

module.exports = app;