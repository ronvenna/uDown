import React from 'react';

class EventCard extends React.Component {


  render() {
    let eventName = "Lunch";
    let eventTime = "8pm";
    let eventLocation = "Chipotle";

    return(
      <div className="event">
        <div className="event_header">
          {eventName + " - " + eventTime + " | " + eventLocation}
        </div>
        <div className="event_body">
          <p>Who's down?</p>
        </div>
      </div>
    )
  }
}

export default EventCard;
