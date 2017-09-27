var test = require('tape')
var tmp = require('..')
var fs = require('fs')
var path = require('path')

test('create temp dir', function (t) {
  tmp(function (err, dir, cleanup) {
    if (err) return cleanup()
  
    // write a single file
    fs.writeFileSync(path.join(dir, 'foo'), 'hello warld!')
  
    // callback that cleans up the directory
    cleanup()

    t.end()
  })
})
