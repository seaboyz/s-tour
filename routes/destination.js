const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>
{
  const url = req.baseUrl
  res.render('destination', { url })
})

module.exports = router