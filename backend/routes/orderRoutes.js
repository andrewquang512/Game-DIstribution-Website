import express from 'express'
import { createNewOrder } from '../controllers/orderControllers.js'
const route = express.Router()

route.post('/', createNewOrder)

export default route