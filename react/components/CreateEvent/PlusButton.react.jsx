import React from 'react';

class PlusButton extends React.Component {
  render() {
    return (
      <a className="add_event_button" onClick={this.props.onClick}>
          <span className="icon">
            <i className="fa fa-plus"></i>
          </span>
      </a>
    )
  }
}

export default PlusButton
