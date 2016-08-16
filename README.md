# then-palmetto

Then Palmetto is a module that uses the promise api to the palmetto flow pattern.

Palmetto-Flow uses the event emitter pattern to listen for responses and emitting
requests. This pattern can look strange and out of place with the current standards
for async control flow. This module attempts to simplify the pattern by abstracting
the pattern using the promise api.

```
var palmetto = require('palmettoflow-nodejs')
var ee = palmetto()

ee.on('1234', function (event) {
  // handle response
})

ee.emit('send', {
  to: '/subject/verb',
  from: '1234',
  subject: 'subject',
  verb: 'verb',
  object: {},
  actor: {}
})
```

Using then-promise

```
var adapter = require('palmettoflow-nodejs')
var ee = adapter()
var palmetto = require('then-palmetto')(ee)

palmetto({
  to: '/subject/verb',
  from: '1234',
  subject: 'subject',
  verb: 'verb',
  object: {},
  actor: {}
}).then(function (event) {
  // handle response
})
```

## Install

```
npm install then-promise -S
```

## Test

```
npm test
```

## License

MIT

## Contributions
