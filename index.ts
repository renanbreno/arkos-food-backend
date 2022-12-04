const express = require('express');
const app = express(); 
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const productRoutes = require('./routes/ProductRoutes');
const mongoose = require('mongoose');
require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoutes);
app.use('/product', productRoutes);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@arkos.xvm5lke.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(process.env.PORT || 3000);
})
.catch((error: string) => console.log(error));

export {}