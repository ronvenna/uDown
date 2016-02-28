import React from 'react'
import Attendee from './Attendee.react.jsx'

class AttendeeList extends React.Component {

  render() {
    console.log(JSON.parse(JSON.stringify(this.props)));
    let attendees = this.props.attendees.map((attendee, i) => (<Attendee key={"attendee" + i} attendee={attendee} />));
    console.log(attendees);
    return (
      <div>
        {attendees}
      </div>
    )
  }
}

export default AttendeeList;
