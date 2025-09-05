// src/app.ts
import express from 'express'
import { config } from 'dotenv'
import routes from './routes'
import cors from "cors"

config()
const app = express()
app.use(cors()) //permite requicições de qualquer 
//app.use(cors({origin: "http://127.0.0.1:5500/"})) para uma origem em especifico 
app.use(express.json())
app.use(routes)

export default app