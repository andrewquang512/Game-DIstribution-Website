import express from 'express'
import { getUserById, createUser, getAllUsers, login } from '../controllers/userControllers.js'
const router = express.Router()

router.post('/login', login)
router.get('/:id', getUserById)
router.post('/', createUser)
router.get('/', getAllUsers)

export default router