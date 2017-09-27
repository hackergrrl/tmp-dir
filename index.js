var os = require('os')
var path = require('path')
var fs = require('fs-extra')
var mkdirp = require('mkdirp')
var guid = require('guid').raw

module.exports = function (work) {
  var tmpDirHead = guid()
  var tmpDir = path.join(path.join(os.tmpdir(), 'tmp-dir'), tmpDirHead)

  mkdirp.sync(tmpDir)

  work(null, tmpDir, function () {
    fs.remove(tmpDir)
  })
}
