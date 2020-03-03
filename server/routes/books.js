const express = require('express');
const router = express.Router();
const db = require('../db/index');

    //Get all Books
    router.get('/', async (req, res) => {
        try {
            let results = await db.all();
            res.json(results);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

    //Get specyfic book
    router.get('/:id', async (req, res) => {
        try {
            let results = await db.oneBook(req.params.id);
            res.json(results);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

module.exports = router;