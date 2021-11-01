import asyncHandler from 'express-async-handler'
import Game from '../models/Game.js'

const getAllGames = asyncHandler(async (req, res) => {
    const games = await Game.find()
    res.json(games)
})

const getGameById = asyncHandler(async (req, res) => {
    const game = await Game.findById(req.params.id)

    if (game) {
        res.json(game)
    } else {
        res.status(404)
        throw new Error('No found item!')
    }
})


export {
    getAllGames,
    getGameById
}