import { Router } from "express";

import pool from '../database/db.js';
const router = Router();


router
.get('/', async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM Test');
        res.status(200).json({test: results});
    }catch(err) {
        console.error('Error fetching data:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

.get('/', function(req, res, next) {
    res.send('API is working properly');
});

export default router;