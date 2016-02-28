import React from 'react';
import EventCard from './EventCard.react.jsx';

class EventList extends React.Component {

  render() {
    if (this.props.events.lenght == 0 || this.props.error) {
      return(
        <div className="column is-4 is-offset-4 event event_error">
          <h1>
            There was a problem finding your event :(
          </h1>
        </div>
      )
    }
    let events = this.props.events.map((event, i) => (<EventCard key={"Event" + i} event={event} />))
    return(
      <div className="column is-4 is-offset-4">
        {events}
      </div>
    );
  }
}

export default EventList;
