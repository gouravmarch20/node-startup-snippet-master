const express = require('express')
const router = express.Router()
const { signup , signin } = require('../controllers/auth.controller')
// middleware
// const authenticate = require('../middleware/authenticate')


router.post('/signup', signup)

router.get('/signin', signin)

module.exports = router
 