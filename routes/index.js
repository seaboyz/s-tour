const path = require('path')

const express = require('express')

const router = express.Router()

const rootDir = require('../util/path')

router.get('/', (req, res) =>
{
  const path = req.url
  res.render('index', { path })
})

module.exports = router