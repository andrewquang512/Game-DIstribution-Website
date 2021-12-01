import express from 'express'
import { 
    uploadGames,
    getAllGames,
    getGameById,
    listGameByPrice,
    listGameByCategory,
    listGameBySearch    
} from '../controllers/gameControllers.js'

const router = express.Router()

router.post('/search', listGameBySearch)
router.post('/price', listGameByPrice)
router.post('/category', listGameByCategory)

router.get('/:id', getGameById)
router.get('/', getAllGames)
router.post('/', uploadGames)
export default router