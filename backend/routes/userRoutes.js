import express from 'express'
import { 
    getUserById, 
    createUser, 
    getAllUsers, 
    login,
    deleteUser,
    updateInfor,
    updatePassword
} from '../controllers/userControllers.js'
const router = express.Router()

router.post('/update/infor', updateInfor)
router.post('/update/password', updatePassword)

router.get('/:id', getUserById)
router.delete('/:id', deleteUser)
router.post('/login', login)
router.post('/', createUser)
router.get('/', getAllUsers)

export default router