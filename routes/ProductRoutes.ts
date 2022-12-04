const routes = require('express').Router();
const Product = require('../models/Products');
import { VercelRequest, VercelResponse } from '@vercel/node';

routes.post('/', async (req: VercelRequest, res: VercelResponse) => {
    const { name, description, avaliation, avaliationAmount, inventory, price, productImg } = req.body;
    const userData = { name, description, avaliation, avaliationAmount, inventory, price, productImg }

    try {
        await Product.create(userData);
        res.send(201);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

routes.get('/', async (req: VercelRequest, res: VercelResponse) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

module.exports = routes;