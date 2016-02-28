import React from 'react';
import EventCard from './EventCard.react.jsx';

class EventList extends React.Component {

  render() {
    console.log(this.props);
    let events = this.props.events.map((event, i) => (<EventCard key={"Event" + i} event={event} />))
    console.log(events);
    return(
      <div className="column is-4 is-offset-4">
        {events}
      </div>
    );
  }
}

export default EventList;
