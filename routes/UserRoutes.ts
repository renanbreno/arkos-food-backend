const routes = require('express').Router();
const User = require('../models/User');
import { Request, Response } from 'express';

routes.post('/', async (req: Request, res: Response) => {
    const { name, email, password, phone, birthDate } = req.body;
    const userData = { name, email, password, phone, birthDate }

    try {
        await User.create(userData);
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

routes.get('/:email', async (req: Request, res: Response) => {
    try {
        const user = await User.findOne(req.params.email);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error})
    }
})

module.exports = routes;