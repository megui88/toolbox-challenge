const { Router } = require('express')
const stringReverse = require('../utils')
const router = Router()

router.get('/', (req, res) => {
  const queryParamText = req.query.text
  if (queryParamText === undefined || queryParamText.trim() === '') {
    res.status(400).send({ error: 'no text' })
    return
  }
  const text = stringReverse(queryParamText.trim())
  const palindrome = queryParamText === text
  res.send({ text, palindrome })
})

module.exports = router
