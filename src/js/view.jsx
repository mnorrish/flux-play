var React = require('react');
var Store = require('./store');

var View = React.createClass({
  getInitialState: function () {
    return {
      items: Store.getItems()
    };
  },

  render: function () {
    console.log(this);
    var items = this.state.items || [];

    var itemNodes = items.map(function (item) {
      return (
        <div>{item}</div>
      );
    });

    return (
      <div>{itemNodes}</div>
    );
  }
});

module.exports = View;
