import 'reflect-metadata'
import express, { Request, Response } from 'express'
import './database'
const app = express()
import routes from './routes'

app.use(express.json())
app.use(routes)


app.listen(3334, () => {
    console.log('servidor rodando', 3334)
})