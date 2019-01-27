'use strict';

module.exports = function (app) {
  var todoList = require('../controllers/gameOfThreeController');

  app.route('/GetNextNumFromPlayer/:inputNum')
    .get(todoList.get_next_num);
};