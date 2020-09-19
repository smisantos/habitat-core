import express from 'express'
import { router } from './api/routes'

import './loaders/connect'

const app = express()

const PORT = 8000

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`🌐[server]: Server is running at http://localhost:${PORT}`)
})
