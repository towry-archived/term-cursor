Move the cursor around on terminal.

## Installation

```bash
$ npm install term-cursor
```

## Usage

The parameter for `cursor.{up|left|down|right}` is a number and must
be a number.

```javascript
var cursor = require('term-cursor');

/* move cursor down 2 lines */
cursor.down(2);

/* move cursor right 2 position */
cursor.right(2);

/* write something at the current cursor position,
it's just a wrapper for process.stdout.write */
cursor.write('Hi');
```

## License

MIT

---

Copyright(c) 2014 Towry Wang <http://towry.me>