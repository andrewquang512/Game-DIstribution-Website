import express from 'express'
import { 
    uploadGames,
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
router.post('/', uploadGames)
export default router