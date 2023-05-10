import mongoose from "mongoose"
import express, { json } from 'express'
import cors from 'cors'

const app = express()
const port = 8000;


app.use(cors())
app.use(json())


app.listen(port, () => console.log(`server is running in ${port}`))