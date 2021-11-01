import express from 'express'
import gamesRoute from './routes/gameRoutes.js'
import connectDB from './config/db.js'

const app = express()
const port = 5000

connectDB()

app.use(express.json())

app.use('/api/games', gamesRoute)
app.get('/', (req, res) => res.send('Hello all!'))

app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))