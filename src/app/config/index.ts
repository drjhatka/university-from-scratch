import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
    path:path.join(process.cwd()+'.env')
})         //config method takes a path object

export const config = {
    default_password: process.env.DEFAULT_PASSWORD,
}