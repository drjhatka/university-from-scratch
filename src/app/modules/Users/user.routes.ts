import express, {Request, Response, NextFunction} from 'express'
import { UserController } from './user.controller'

export const router = express.Router()

//define user routes....
router.post('/create-admin', UserController.createAdmin)
router.post('/create-student', UserController.createStudent)
router.post('/create-faculty', UserController.createFaculty)
router.post('/create-employee', UserController.createEmployee)

export const UserRoutes = router;



