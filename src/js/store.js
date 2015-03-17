var Reflux = require('reflux');

var _items = [
  'Spam',
  'Eggs'
];

var Store = Reflux.createStore({
  init: function () {},

  getItems: function () {
    return _items;
  }
});

module.exports = Store;