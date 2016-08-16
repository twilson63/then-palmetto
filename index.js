const { responseError } = require('palmettoflow-event')

module.exports = function (ee) {
  // test for ee.emit
  // test for ee.on

  return function (event) {
    return new Promise(function (resolve, reject) {
      var resolved = false
      var handleResponse = function (e) {
        if (!resolved) {
          resolved = true
          resolve(e)
        }
      }

      ee.once(event.from, handleResponse)
      ee.emit('send', event)
      setTimeout(function () {
        if (!resolved) {
          resolved = true
          reject(responseError(event, { msg: 'Timeout Occured'}))
          ee.removeListener(event.from, handleResponse)
        }
      }, 2000)
    })
  }
}
