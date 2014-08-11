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
  VERSION: '0.0.1'
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
 * Move cursor left by n times
 *
 * @param {Number} n
 * @api public
 */

cursor.left = function (n) {
  if (n && typeof n !== 'number') {
    throw new Error("The param must be a number.");
  }

  if (!n || n === 0) {
    return;
  }

  var escstr = util.format(escs.left, n);
  stdout.write(escstr);
}

/**
 * Move cursor up by n times
 *
 * @param {Number} n
 * @api public
 */

cursor.up = function (n) {
  if (n && typeof n !== 'number') {
    throw new Error("The param must be a number");
  }

  if (!n || n === 0) {
    return;
  }

  var escstr = util.format(escs.up, n);
  stdout.write(escstr);
}

/**
 * Move cursor right by n times
 *
 * @param {Number} n
 * @api public
 */

cursor.right = function (n) {
  if (n && typeof n !== 'number') {
    throw new Error("The param must be a number");
  }

  if (!n || n === 0) {
    return;
  }

  var escstr = util.format(escs.right, n);
  stdout.write(escstr);
}

/**
 * Move cursor down by n times
 *
 * @param {Number} n
 * @api public
 */

cursor.down = function (n) {
  if (n && typeof n !== 'number') {
    throw new Error("The param must be a number");
  }

  if (!n || n === 0) {
    return;
  }

  var escstr = util.format(escs.down, n);
  stdout.write(escstr);
}

/**
 * Reset the terminal to initial state
 *
 * @api public
 */

cursor.reset = function () {
  stdout.write(escs.reset);
}

/**
 * Write something to the terminal at current 
 * position of the cursor.
 *
 * @api public
 */

cursor.write = function (s) {
  return stdout.write(s);
}