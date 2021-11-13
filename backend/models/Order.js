import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        orderItems: [
            {
                name: { type: String, required: true },
                quantity: { type: Number, required: true },
                icon: { type: String, required: true },
                price: { type: Number, required: true },
                publisher: { type: String, require: true},
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Game',
                },
            },
        ],
        shippingAddress: {
            address: { type: String, required: true },
            district: { type: String, require: true },
            province: { type: String, required: true },
            country: { type: String, required: true },
            phoneNumber: { type: String, required: true }
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentResult: {
            id: { type: String },
            status: { type: String },
            update_time: { type: String },
            email_address: { type: String },
        },
        shippingPrices: {
            type: Number,
            required: true,
            default: 0.0,
        },
        orderPrices: {
            type: Number,
            required: true
        },
        totalPrices: {
            type: Number,
            required: true,
            default: 0.0,
        },
        isPaid: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order
