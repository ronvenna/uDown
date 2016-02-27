import React from 'react';

class UserActions extends React.Component {
  render() {
    return (
      <div>
        <span className="icon">
          <i className="fa fa-caret-down"></i>
        </span>
        <div className="user_actions is-text-centered inactive">
          Log Out
        </div>

      </div>
    )
  }
}

export default UserActions;
