import express from 'express'
import { getAllGames, getGameById } from '../controllers/gameControllers.js'

const router = express.Router()

router.get('/:id', getGameById)
router.get('/', getAllGames)

export default router