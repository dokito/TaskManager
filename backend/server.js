const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose
.set('useUnifiedTopology', true)
.connect(uri, { useNewUrlParser: true,
useCreateIndex: true })
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err));

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

//Test stuff
const users = ["pesho", "ivan"];
//Routes
app.get('/users', (req, res) => {
    res.json(users)
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})