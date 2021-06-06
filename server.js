import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import pageRoute from './routes/program';

//Initialize App
const app = express();
app.use(express.json());

const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));


// app.use((request, response, next) => {
// 	response.header("Access-Control-Allow-Origin", "http://localhost:3000");
// 	response.header("Access-Control-Allow-Headers", "Content-Type");
// 	next();
//   });

app.get('/', (req, res) => {
    console.log("Home basic");
    res.json({ msg: "odgnjdgn" })
})

const mongoUri = 'mongodb+srv://test:123@cluster0.iiyzw.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(
  mongoUri,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log('Connected to MongoDB');
  },
);

app.use('/pages', pageRoute);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("App is running on port " + port);
});