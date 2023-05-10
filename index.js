import mongoose from "mongoose"
import express, { json } from 'express'
import cors from 'cors'
import routes from "./routes/index.js";
import UsersModal from "./modals/index.js";

mongoose.connect('mongodb://127.0.0.1:27017/testing',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const app = express();
const port = 8000;

app.use(json());

app.use(routes);

app.use(cors());



app.listen(port, () => console.log(`server is running in ${port}`))