const path = require('path')

const express = require('express')

const router = express.Router()

const rootDir = require('../util/path')

router.get('/', (req, res) =>
{
  res.sendFile(path.join(rootDir, 'views', 'index.html'))
})

module.exports = router