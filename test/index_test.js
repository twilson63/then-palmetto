var test = require('tap').test


var adapter = require('palmettoflow-nodejs')
var ee = adapter()

ee.on('/subject/verb', function (e) {
  ee.emit('send', {
    to: e.from,
    from: e.to,
    subject: e.subject + '-response',
    verb: 'response',
    object: {ok: true }
  })
})

var palmetto = require('../')(ee)

test('then-palmetto should return response', t => {
  palmetto({
    to: '/subject/verb',
    from: '1234',
    subject: 'subject',
    verb: 'verb',
    object: {},
    actor: {}
  }).then(function (event) {
    // handle response
    t.ok(event.object.ok)
    t.end()
  }).catch(function (err) {
    t.ok(err.object.msg === 'Timeout Occured')
    t.end()
  })
})
