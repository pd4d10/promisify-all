const { promisify } = require('util')
const data = require('./data')

function promisifyAll({ suffix = 'Async' } = {}) {
  data.forEach(item => {
    const m = require(item.namespace)
    item.methods.forEach(method => {
      const original = m[method]
      if (original) {
        m[method + suffix] = promisify(original)
      }
    })
  })
}

module.exports = promisifyAll
