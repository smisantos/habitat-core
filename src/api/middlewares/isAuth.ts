import { Request, Response, NextFunction } from 'express'

function isAuth (req:Request, res:Response, next:NextFunction) {
  console.log(req.body)
  const { username, email } = req.body
  console.log('This is the: ' + username + email)
  next()
}
export { isAuth }
