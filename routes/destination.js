const express = require('express')

const router = express.Router()

router.get('/', (req, res) =>
{
  res.render('destination')
})

module.exports = router