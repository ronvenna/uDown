import React from 'react';
import UserActions from './UserActions.react.jsx';

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hover : false,
      active: false
    }
  }

  toggleActive() {
    this.setState({
      active: !this.state.active
    })
  }

  unActive() {
    this.setState({
      active: false
    })
  }

  render() {
    let teamName = "Strongpoop"
    let userName = "Jane Gonzales"
    let userImage = "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg"

    return (
      <div tabIndex={0} className="navbar-right user" onClick={this.toggleActive.bind(this)} onBlur={this.unActive.bind(this)}>
        <div className="navbar-item">
          <div className="user_name is-text-right">
            {userName}
          </div>
          <div className="user_team is-text-right">
            {teamName}
          </div>
        </div>
        <div className="user_image navbar-item" style={{backgroundImage: "url("+userImage + ")"}}>
        </div>
        <UserActions hover={this.state.hover} active={this.state.active}/>

      </div>
    )
  }
}

export default User;
