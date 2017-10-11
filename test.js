const assert = require('assert')
const promisifyAll = require('./')
const data = require('./data')

describe('default', function() {
  before(function() {
    promisifyAll()
  })

  data.forEach(item => {
    const { namespace, methods } = item
    methods.forEach(method => {
      const m = `${method}Async`

      if (require(namespace)[method]) {
        it(`${namespace}.${m} should be a function`, function() {
          assert.equal(typeof require(namespace)[m], 'function')
        })
      }
    })
  })
})
