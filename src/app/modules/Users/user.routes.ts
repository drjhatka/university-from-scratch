import express, {Request, Response, NextFunction} from 'express'
import { UserController } from './user.controller'

export const router = express.Router()

//define user routes

router.post('/create-student', UserController.createUser)




