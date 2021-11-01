import express from 'express'
import { getAllGames } from '../controllers/gameControllers.js'

const router = express.Router()

router.get('/', getAllGames)

export default router