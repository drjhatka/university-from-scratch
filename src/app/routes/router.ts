import express from 'express';
import { UserRoutes } from '../modules/Users/user.routes';

//create all routes here

const router = express.Router()

const routes =[
    {
        path:'/users',
        route:UserRoutes,
    },
    // {
    //     path:'/students',
    //     route:StudentRoutes,
    // },
]
routes.forEach(route=>router.use(route.path, route.route)); // use all routes

export default router;