var cursor = require('../');

cursor.reset();

cursor.moveTo(2, 3).write('hi').moveTo(3,3).write('?');
