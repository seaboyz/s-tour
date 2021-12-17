const express = require('express')
const { compose, last, split, prop, filter, equals, propEq } = require('ramda')

const json = require('../data/data.json')


const router = express.Router()

const log = require('../util/log')
const capitalize = require('../util/capitalize')
const { find } = require('ramda')

router.all('*', (req, res) =>
{
  const destination = compose(
    last,
    split('/')
  )(req.url)


  const data = compose(
    find(
      propEq('name', capitalize(destination))
    ),
    prop('destinations')
  )(json)

  res.render('destination', { path: '/destination', data: data })
})





module.exports = router