import { Router } from 'express'
import middlewares from '../middlewares'

const router = Router()

router.post('/v1/user', middlewares.isAuth, (req, res) => res.send(req.body))

export { router }
