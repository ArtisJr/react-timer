var React = require('react');

var TimerForm = React.createClass({
  onClick: function () {
    e.preventDefault();

    this.props.onSetTimer();
  },
  render: function () {
    return (
      <div className="controls">
        <button className="button" onClick={this.onClick}>Start</button>
        <button className="button hollow">Clear</button>
      </div>
    )
  }
});

module.exports = TimerForm;