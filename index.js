import * as dotenv from 'dotenv';
import express from 'express'
import initApp from './src/app.router.js'
const app = express()
const port = 5000
dotenv.config();



initApp(app , express)

app.listen(port,
    () => console.log(`Server is running on port ${port}!`))