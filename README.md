# tmp-dir

> Create unique tempdir directories.

---

*You're probably looking for [node-tmp](https://github.com/raszi/node-tmp).*

I wrote this module while offline and wasn't sure if anything like it existed.
Turns out it did, and with *tests*! So you really ought to use
[node-tmp](https://github.com/raszi/node-tmp) instead!

---

Use `os.tmpdir()` plus a GUID to create temporary directories in a
*laissez-faire* manner. Never worry about deducing your own unique name and
location for a throw-away directory!

## Usage

```js
var tmp = require('tmp-dir')

tmp(function (err, dir, cleanup) {
  if (err) return cleanup()

  // write a single file
  fs.writeFileSync(path.join(dir, 'foo'), 'hello warld!')

  // callback that cleans up the directory
  cleanup()
})
```

## API

```js
var tmp = require('tmp-dir')
```

### tmp(work)

Creates a new temporary directory in `/tmp/tmp-dir/some-unique-identifier`.
`work` gets called once the directory is created, and has the form `function
(err, dir, cleanup) {}`. `err` is set if the temp dir couldn't be created; `dir`
is the absolute path to the directory, and `cleanup` is a function for you to
call when you are done with the directory for clean-up.

## Install

With [npm](https://npmjs.org/) installed, run

```
$ npm install tmp-dir
```

## See Also

- [`ice-box`](https://github.com/noffle/ice-box)
- [`common-readme`](https://github.com/noffle/common-readme)

## License

ISC

