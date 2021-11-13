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
        totalPrices
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
            totalPrices
        })

        res.json(order)
    } 
})

export {
    createNewOrder
}