import dotenv from 'dotenv'
import path from 'path'
import cors from 'cors';
import express, { Application } from 'express';
import cookieParser from 'cookie-parser';

dotenv.config({ path: path.join('./' + '.env') })

export const configureServer = (app: Application):void => {
    app.use(server_config.jsonParser)       // for parsing json
    app.use(server_config.cookieParser)                 //for parsing cookies
    app.use(server_config.cors)                         //for using cors
}

export const server_config = {
    cors: cors({origin:"*"}), // for now accept requests from everywhere
    jsonParser: express.json(),
    cookieParser: cookieParser(),
}
export const config = {
    default_password: process.env.DEFAULT_PASSWORD,
    database_url: process.env.DATABASE_URL,
    port: process.env.DB_PORT,
}