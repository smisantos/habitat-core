import { Router } from 'express'

const router = Router()

router.post('/users', (req, res) => res.status(201).send())

export default router
