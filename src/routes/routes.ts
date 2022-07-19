import express from 'express'
import exampleRoutes from './example.routes'

export default express.Router()
    .get('/', (req, res) => res.json('Hello World!'))
    .use('/example', exampleRoutes)
