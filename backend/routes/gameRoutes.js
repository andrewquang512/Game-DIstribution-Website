import express from 'express'
import { 
    getAllGames,
    getGameById,
    listGameByPrice,
    listGameByCategory     
} from '../controllers/gameControllers.js'

const router = express.Router()

router.post('/price', listGameByPrice)
router.post('/category', listGameByCategory)

router.get('/:id', getGameById)
router.get('/', getAllGames)

export default router