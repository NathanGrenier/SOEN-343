import { Router } from "express";

import pool from '../database/db.js';
const router = Router();


router
.post('/', async (req, res) => {
    const {packages} = req.body
    try {
        const results = await pool.query(
            `INSERT INTO Packages (dropOffName, dropOffLastName, dropOffAddress, dropOffDate, pickUpName, pickUpLastName, pickUpAddress, pickUpDate, amount, email)` +
             `VALUES(${packages.dropOffName}, ${packages.dropOffLastName}, ${packages.dropOffAddress}, ${packages.dropOffDate}, ${packages.pickUpName}, ${packages.pickUpLastName}, ${packages.pickUpAddress}, ${packages.pickUpDate}, ${packages.amount}, ${packages.email})`);
        res.status(200).json(results.recordset);
    }catch(err) {
        console.error('Error fetching data:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

.get('/:id', async (req, res) =>{
    const id = req.params.id;
    try {
        const results = await pool.query(`SELECT * FROM Packages WHERE id = ${id}`);
        res.status(200).json(results.recordset);
    }catch(err) {
        console.error('Error fetching data:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

export default router;