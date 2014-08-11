var cursor = require('./');

var n = 0;
var timer = null;

cursor.reset();

timer = setInterval(function () {
  if (n < 5) {
    cursor.right(1);
  } else if (n < 10) {
    cursor.left(1);
  } else if (n < 15) {
    cursor.down(2);
  } else if (n < 20) {
    cursor.up(1);
  } else {
    clearInterval(timer);
    cursor.write('Hello World!');
  }
  n+=1;
}, 1010);
