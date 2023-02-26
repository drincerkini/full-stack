import { MONGO_CONECTION_URI, MONGO_DB_NAME, MONGO_PORT, API_PORT} from './config';
// const express = require('express');
import express from 'express';
import realEstateRouter from './routes/realEstateRouter';
import categoryRouter from './routes/categoryRouter';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';





mongoose.connect(`${MONGO_CONECTION_URI}:${MONGO_PORT}/${MONGO_DB_NAME}`).then(() => {
        console.log(`connected to mongodb on port ${MONGO_PORT}`);
    

        const app = express();
        
        app.use(bodyParser.json());

        app.use(cors({
            origin: '*'
        }))

        app.get('/health', (req, res) => {
            res.json({succes : true})
        });

        app.get('/api', (req, res) => {
            res.json({succes : true})
        });

        app.use('/categories', categoryRouter)
        
        app.use('/real-estate', realEstateRouter);

        app.get('*', (req, res) => {
            res.json({msg: "Not Found"});
        });

        app.listen(API_PORT, () => {
            console.log(`Server is listening to port ${API_PORT} ....`)
        })

    }
);
