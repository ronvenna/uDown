import React from 'react';

class Attendee extends React.Component {
  render() {
    return (
      <article className="attendee media">

        <div className="user_image media-left" style={{backgroundImage: "url("+this.props.attendee.profile.image_72 + ")"}}>
        </div>
        <div className="media-right">
          {this.props.attendee.name}
        </div>
      </article>
    )
  }
}
 export default Attendee;
