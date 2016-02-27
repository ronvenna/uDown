import React from 'react';

class UserActions extends React.Component {
  render() {
    var active = this.props.active ? "active" : "inactive";

    return (
      <div>
        <div className={"user_actions is-text-centered " + active}>
          Log Out
        </div>

      </div>
    )
  }
}

export default UserActions;
