import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://fxminhquan:nlmq...2001@cluster0.bgfvu.mongodb.net/game-distribution?retryWrites=true&w=majority'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log('MongoDB connected successfully!')
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB
