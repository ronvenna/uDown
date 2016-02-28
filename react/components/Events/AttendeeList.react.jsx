import React from 'react'
import Attendee from './Attendee.react.jsx'

class AttendeeList extends React.Component {

  render() {
    if (this.props.attendees.length == 0) {
      return (
        <div className="event_error">
          No one is down :(
        </div>
      )
    }
    let attendees = this.props.attendees.map((attendee, i) => (<Attendee key={"attendee" + i} attendee={attendee} />));
    return (
      <div>
        {attendees}
      </div>
    )
  }
}

export default AttendeeList;
