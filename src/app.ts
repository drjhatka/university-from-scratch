import express,{Request, Response} from 'express';
import { Application } from "express";
import { configureServer } from './app/config';
import router from './app/routes/router';


// create server app
const app:Application = express()   //create express application from express library

//configure server...
configureServer(app)

//handle application routes
app.use('/app/v1',router )      // a single router should define all the routes

//for testing...
// app.use('/',(req:Request, res:Response)=>{
//     res.send('Server is Alive')
// })

export default app;

