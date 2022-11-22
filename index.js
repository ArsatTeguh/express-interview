import express from 'express'
import Product from './src/router/service.js';
import bodyParser from 'body-parser';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', Product)



export default app
