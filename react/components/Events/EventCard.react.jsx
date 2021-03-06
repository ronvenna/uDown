import React from 'react';
import AttendeeList from './AttendeeList.react.jsx';

class EventCard extends React.Component {


  render() {
    let eventName = this.props.event.name;
    let eventTime = this.props.event.time;
    let eventLocation = this.props.event.location;

    return(
      <div className="event">
        <div className="event_header">
          {eventLocation + " | " + eventTime}
        </div>
        <div className="event_body">
          <p>Who's down?</p>
          <AttendeeList attendees={this.props.event.attending} />
        </div>
      </div>
    )
  }
}

export default EventCard;
