const routes = require('express').Router();
const User = require('../models/User');
import { VercelRequest, VercelResponse } from '@vercel/node';

routes.post('/', async (req: VercelRequest, res: VercelResponse) => {
    const { name, email, password, phone, birthDate } = req.body;
    const userData = { name, email, password, phone, birthDate }

    try {
        await User.create(userData);
        res.send(201);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

routes.get('/:email', async (req: VercelRequest, res: VercelResponse) => {
    // try {
    //     const user = await User.findOne(req.query);
    //     res.status(200).json(user);
    // } catch (error) {
    //     res.status(500).json({ error: error})
    // }
})

module.exports = routes;