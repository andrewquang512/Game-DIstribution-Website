import express from 'express';
import path from 'path';
import gamesRoute from './routes/gameRoutes.js';
import userRoute from './routes/userRoutes.js';
import orderRoute from './routes/orderRoutes.js';
import connectDB from './config/db.js';
import multer from 'multer';

const app = express();
const port = process.env.PORT || 5000;

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

var upload = multer({ storage: storage });

connectDB();
app.use(express.json());
// app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/api/games', gamesRoute);
app.use('/api/users', userRoute);
app.use('/api/order', orderRoute);

// app.get('/', (req, res) => res.send('Hello all!'));

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  // ? get('*') get anything from roots here and load to serve index.html
  app.get('*', (req, res) => {
    // ? __dirname get current directory
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () =>
  console.log(`Server is running at http://localhost:${port}`)
);
