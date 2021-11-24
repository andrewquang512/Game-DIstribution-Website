import asyncHandler from 'express-async-handler'
import Game from '../models/Game.js'

const uploadGames = asyncHandler(async (req, res) => {
    const {
        name,
        price,
        description,
        publisher,
        icon,
        countInStock,
        category
    } = req.body

    const gameCreated = await Game.create({
        name, price, description, publisher, icon, countInStock, category
    })

    if (gameCreated) {
        res.json({ success: true })
    } else {
        res.status(406)
        throw new Error('Can\'t upload the game')
    }
})

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

const listGameByPrice = asyncHandler(async (req, res) => {
    const range = req.body.range

    if (range == '0-100') {
        const data = await Game.find({ price: { $gte: 0, $lt: 100000 } })

        res.json(data)
    }
    else if (range == '100-200') {
        const data = await Game.find({ price: { $gte: 100000, $lt: 200000 } })

        res.json(data)
    }
    else {
        const data = await Game.find({ price: { $gte: 200000 } })

        res.json(data)
    }
})

const listGameByCategory = asyncHandler(async (req, res) => {
    const range = req.body.range

    if (range == 'adventure') {
        const data = await Game.find({ category: 'Adventure' })

        res.json(data)
    }
    else if (range == 'strategy') {
        const data = await Game.find({ category: 'Strategy' })

        res.json(data)
    }
    else if (range == 'survival') {
        const data = await Game.find({ category: 'Survival' })

        res.json(data)
    }
    else {
        const data = await Game.find({ category: 'Puzlle' })

        res.json(data)
    }
})


export {
    getAllGames,
    getGameById,
    listGameByPrice,
    listGameByCategory,
    uploadGames
}