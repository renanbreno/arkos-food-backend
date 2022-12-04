const routes = require('express').Router();
const Product = require('../models/Products');
import { Request, Response } from 'express';

routes.post('/', async (req: Request, res: Response) => {
    const { name, description, avaliation, avaliationAmount, inventory, price, productImg } = req.body;
    const userData = { name, description, avaliation, avaliationAmount, inventory, price, productImg }

    try {
        await Product.create(userData);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

routes.get('/', async (req: Request, res: Response) => {
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

module.exports = routes;