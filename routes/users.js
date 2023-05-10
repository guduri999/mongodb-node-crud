import express from 'express'
import { createUser, findAllUsers } from '../controllers/users.js'

const userRoutes = express.Router()

userRoutes.get('/findAllUsers', findAllUsers);

userRoutes.post('/createUser', createUser)

export default userRoutes;