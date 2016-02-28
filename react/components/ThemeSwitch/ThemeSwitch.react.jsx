import React from 'react';

class PlusButton extends React.Component {
  switchTheme() {
    console.log(document.body.classList);
    if (document.body.classList.length == 0) {
      document.body.classList.add("lite");
    } else {
      document.body.classList.remove("lite");
    }
  }

  render() {
    return (
      <a className="add_event_button" onClick={this.switchTheme}>
          <span className="icon">
            <i className="fa fa-lightbulb-o"></i>
          </span>
      </a>
    )
  }
}

export default PlusButton;
