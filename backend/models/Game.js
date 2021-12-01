import mongoose from 'mongoose'

const gameSchema = mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number },
    description: { type: String },
    publisher: { type: String },
    icon: { type: String },
    countInStock: { type: Number},
    category: { type: String }
})


const Game = mongoose.model('Game', gameSchema)
export default Game