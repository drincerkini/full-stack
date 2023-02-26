//const express = require('express');
import express from 'express';

//list me real-estate
const realEstates = [
    {
        id: 1,
        title: 'Houose in France',
        content: "despcription 1"
    },
    {
        id: 2,
        title: 'Houose in Germany',
        content: "despcription 2"
    },
    {
        id: 3,
        title: 'Houose in Engalnd',
        content: "despcription 3"
    }
]

const router = express.Router();

router.get('/', (req, res) => {
    res.json({realEstates})
});

router.get('/:id', (req, res) => {
    const result = realEstates.find((real) => real.id === parseInt(req.params.id));
    if(result){
        return res.json(result);
    }

    return res.status(404).json();
});

router.post('/create', (req, res) => {
    
})

export default router;