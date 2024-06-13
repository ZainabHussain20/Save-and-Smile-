const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS) || 10
const APP_SECRET = process.env.APP_SECRET

const hashPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
    return hashedPassword
  } catch (error) {
    throw new Error('Hashing password failed')
  }
}

const comparePassword = async (storedPassword, password) => {
  try {
    const passwordMatch = await bcrypt.compare(password, storedPassword)
    return passwordMatch
  } catch (error) {
    throw new Error('Comparing password failed')
  }
}

const createToken = (payload) => {
  try {
    const token = jwt.sign(payload, APP_SECRET, { expiresIn: '1d' })
    return token
  } catch (error) {
    throw new Error('Creating token failed')
  }
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals
  try {
    const payload = jwt.verify(token, APP_SECRET)
    if (payload) {
      res.locals.payload = payload
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Verify Token Error!' })
  }
}

const stripToken = (req, res, next) => {
  try {
    const authorizationHeader = req.headers['authorization']
    if (authorizationHeader) {
      const token = authorizationHeader.split(' ')[1]
      if (token) {
        res.locals.token = token
        return next()
      }
    }
    res.status(401).send({ status: 'Error', msg: 'Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Strip Token Error!' })
  }
}
module.exports = {
  stripToken,
  verifyToken,
  createToken,
  comparePassword,
  hashPassword
}
