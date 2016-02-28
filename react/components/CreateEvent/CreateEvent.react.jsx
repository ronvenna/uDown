import React from 'react';

class CreateEvent extends React.Component {


  render() {
    let eventName = "Lunch";
    let eventTime = "8pm";
    let eventLocation = "Chipotle";

    return(
      <div className="event">
        <div className="event_header">
          "Create Event fudger"
        </div>
        <div className="event_body">
          <p>Event: </p><input class="input" type="text"></input>
          <p>Time: </p><input class="input" type="text"></input>
        </div>
      </div>
    )
  }
}

export default CreateEvent;
