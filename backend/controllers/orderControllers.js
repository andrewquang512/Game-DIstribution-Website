import asyncHandler from 'express-async-handler'
import Order from '../models/Order.js'

const createNewOrder = asyncHandler(async (req, res) => {
    const {
        id,
        orderItems,
        shippingAddress,
        paymentMethod,
        shippingPrices,
        orderPrices,
        totalPrices,
        isPaid
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No items in cart')
    } else {
        const order = await Order.create({
            user: id,
            orderItems,
            shippingAddress,
            paymentMethod,
            shippingPrices,
            orderPrices,
            totalPrices,
            isPaid
        })

        res.json(order)
    } 
})

const getAllOrders = asyncHandler(async (req, res) => {
    const id = req.body.id

    const allOrders = await Order.find({ user: id })

    res.json(allOrders)
})

export {
    createNewOrder,
    getAllOrders
}