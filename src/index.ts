const express = require('express');
const app = express(); 
const cors = require('cors');
const userRoutes = require('./UserRoutes');
const productRoutes = require('./ProductRoutes');
const mongoose3 = require('mongoose');
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/product', productRoutes);

mongoose3.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@arkos.xvm5lke.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(process.env.PORT || 3000);
})
.catch((error: string) => console.log(error));
