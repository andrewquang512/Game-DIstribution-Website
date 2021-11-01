import asyncHandler from 'express-async-handler'
import Game from '../models/Game.js'

const getAllGames = asyncHandler(async (req, res) => {
    const games = await Game.find()
    res.json(games)
})


export {
    getAllGames
}