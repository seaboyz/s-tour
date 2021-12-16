const path = require('path')

const express = require('express')

const router = express.Router()

const rootDir = require('../util/path')

router.get('/', (req, res) =>
{
  const url = req.url
  res.render('index', { url })
})

module.exports = router