import { Router } from "express";

import pool from '../database/db.js';
const router = Router();


router
.post('/', async (req, res) => {
    const {packages} = req.body
    const query = `
            INSERT INTO Packages (
                dropOffName, dropOffLastName, dropOffAddress, dropOffDate,
                pickUpName, pickUpLastName, pickUpAddress, pickUpDate,
                amount, email, status
            ) VALUES (
                '${packages.dropOffName}',          
                '${packages.dropOffLastName}',      
                '${packages.dropOffAddress}',      
                '${packages.dropOffDate}',                 
                '${packages.pickUpName}',          
                '${packages.pickUpLastName}',      
                '${packages.pickUpAddress}',        
                '${packages.pickUpDate}',                    
                ${packages.amount},                 
                '${packages.email}',                
                '${packages.status}'                
            );
            SELECT SCOPE_IDENTITY() AS LatestID;
        `;
    try {
        const results = await pool.query(query);
        res.status(200).json({ message: 'Package successfully inserted', 
            id: results.recordset[0].LatestID
        });
        
    }catch(err) {
        console.error('Error fetching data:', err);
        res.status(500).json({error: 'Internal Server Error' + query});
    }
})

.get('/:id', async (req, res) =>{
    const id = req.params.id;
    try {
        const results = await pool.query(`SELECT * FROM Packages WHERE id = ${id}`);
        res.status(200).json(results.recordset[0]);
        console.log(results.recordset[0]);
    }catch(err) {
        console.error('Error fetching data:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})

.get('/amount/:id', async (req, res) =>{
    const id = req.params.id;
    try {
        const results = await pool.query(`SELECT amount FROM Packages WHERE id = ${id}`);
        res.status(200).json(results.recordset[0]);
        console.log(results.recordset[0]);
    }catch(err) {
        console.error('Error fetching data:', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

export default router;