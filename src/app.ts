import express,{Request, Response} from 'express';
import { Application } from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { router } from './app/modules/Users/user.routes';

// create server app
const app:Application = express()   //create express application from express library

//configure server...
app.use(express.json())     // for parsing json
app.use(cookieParser())     //for parsing cookies
app.use(cors())             //for using cors

//handle application routes
app.use('/app/v1', router)      // a single router should define all the routes 

//for testing...
app.use('/',(req:Request, res:Response)=>{
    res.send('Server is Alive')
})

