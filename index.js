/*!
 * term-cursor
 *
 * @author Towry Wang <http://towry.me>
 * @license MIT
 */

var util = require('util');

/**
 * Expose the objects
 */

module.exports = cursor = {
  VERSION: '1.0.1'
};

/**
 * Escaped characters
 * => use util.format to formt the string.
 */

var escs = {
  left: '\u001B[%dD',
  up: '\u001B[%dA',
  right: '\u001B[%dC',
  down: '\u001B[%dB',
  reset: '\u001Bc'
}

/**
 * The standard output
 */
var stdout = process.stdout;

/**
 * The factory
 *
 * @api private
 */
function factory(t) {
  return function (n) {
    if (n && typeof n !== 'number') {
      throw new Error('The param must be a number.');
    }

    if (!n || n === 0) {
      return this;
    }

    var escstr = util.format(escs[t], n);
    stdout.write(escstr);

    return this;
  }
}


/**
 * cursor.{left|up|right|down}
 *
 * @param {Number} n
 * @api public
 */
cursor.left = factory('left');
cursor.up = factory('up');
cursor.right = factory('right');
cursor.down = factory('down');

/**
 * Move onto a spot
 *
 * @param {Number}
 * @api public
 */
cursor.move = function (x, y) {
  var moveX = x > 0 ? this.right : this.left;
  var moveY = y > 0 ? this.down : this.up;

  moveX(x);
  moveY(x);

  return this;
}

/**
 * Move to a spot
 *
 * @param {Number}
 * @api public
 */
cursor.moveTo = function (x, y) {
  if (!y) {
    y = 0;
  }

  if (x < 0 || y < 0) {
    throw new Error('params must be positive number.');
  }

  var loc = util.format('\u001B[%d;%df', x, y);
  stdout.write(loc);

  return this;
}

/**
 * Move back and clear the characters
 *
 * @api public
 */
cursor.back = function (n) {
  if (!n || n < 0) {
    return cursor.reset();
  }

  var backs = Array(n + 1).join('\b \b');

  return stdout.write(backs), this;
}

/**
 * Reset the terminal to initial state
 *
 * @api public
 */
cursor.reset = function () {
  stdout.write(escs.reset);

  return this;
}

/**
 * Write something to the terminal at current 
 * position of the cursor.
 *
 * @api public
 */
cursor.write = function (s) {
  return stdout.write(s), this;
}