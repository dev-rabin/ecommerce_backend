const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose")
const morgan = require("morgan");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}))
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(multer);


const mongodbAPI = "mongodb+srv://robinmandhotia:Robin123@rabincluster.ukgzcqb.mongodb.net/ecommerce?retryWrites=true&w=majority";

mongoose.connect(mongodbAPI);

app.get("/", function(req, res ){
    res.send("Welcome to Eccomerce Homepage Thank You!")
})


const PORT = 5000;
app.listen(PORT, () => console.log('Server Started at PORT:5000') )

