import React from 'react';

class User extends React.Component {

  render() {
    let teamName = "Strongpoop"
    let userName = "Jane Gonzales"
    let userImage = "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg"

    return (
      <div className="navbar-right user">
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
      </div>
    )
  }
}

export default User;
