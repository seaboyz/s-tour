const { converge, concat, toUpper, head, compose, tail } = require('ramda');

const capitalize = converge(
  concat,
  [
    compose(toUpper, head),
    tail
  ]
)

module.exports = capitalize

