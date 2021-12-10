import asyncHandler from 'express-async-handler'
import User from '../models/User.js'

const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find()

    res.json(users)
})

const getUserById = asyncHandler(async (req, res) => {

})

const createUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    const user = await User.findOne({ email: email })

    if (user) {
        res.status(400)
        throw new Error('User already exist!')
    } else {
        const newUser = await User.create({
            name,
            email,
            password
        })

        if (!newUser) {
            res.status(406)
            throw new Error('Can\'t create a new user')
        } else {
            res.json({
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                isAdmin: newUser.isAdmin,
            })
        }
    }
})

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const userExist = await User.findOne({ email: email, password: password })

    if (userExist) {
        res.json({
            id: userExist._id,
            name: userExist.name,
            email: userExist.email,
            isAdmin: userExist.isAdmin,
            isProvider: userExist.isProvider
        })
    } else {
        res.status(401)
        throw new Error('The email or password isn\'t correct!')
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    const id = req.params.id

    const checkSuccess = await User.findByIdAndDelete(id)
    if (checkSuccess) res.json(true)
    else {
        res.status(401)
        throw new Error('Has the error while deleting!')
    }
})

const updateInfor = asyncHandler(async (req, res) => {
    const { id, name, email } = req.body

    let user = await User.findByIdAndUpdate(id, {
        name, email
    })

    if (user) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isProvider: user.isProvider
        })
    } else {
        res.status(401)
        throw new Error('Can\'t update information!')
    }
})

const updatePassword = asyncHandler(async (req, res) => {
    const { id, password } = req.body

    let user = await User.findByIdAndUpdate(id, { password })

    if (user) res.json(true)
    else {
        res.status(401)
        throw new Error('Can\'t change password')
    }
})

export {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    login,
    updateInfor,
    updatePassword
}

