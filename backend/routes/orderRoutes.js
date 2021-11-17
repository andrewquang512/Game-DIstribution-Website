import express from 'express'
import { createNewOrder, getAllOrders } from '../controllers/orderControllers.js'
const route = express.Router()

route.post('/myorder', getAllOrders)
route.post('/', createNewOrder)


export default route