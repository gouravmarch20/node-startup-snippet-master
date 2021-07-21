// models import
const User = require('../models/User')
// npm

// logic
exports.signup = async (req, res) => {
  try {
    res.status(200).json({ messagee: 'hit signup ---> Post ' })
  } catch (error) {
    console.log(error)
  }
}
exports.signin = async (req, res) => {
  return res.status(200).json({ messagee: 'hit signin ---> Get ' })
}
