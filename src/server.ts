import 'reflect-metadata'
import express, { Request, Response } from 'express'
import './database'


const app = express()

app.get('/', (request: Request, response: Response) => {
    return response.send('Hello World')
})


app.listen(3333, () => {
    console.log('servidor rodando', 3333)
})