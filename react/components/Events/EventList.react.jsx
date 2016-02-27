import React from 'react';
import EventCard from './EventCard.react.jsx';

class Main extends React.Component {
  render() {
    return(
      <div className="column is-4 is-offset-4">
        <EventCard />
      </div>
    );
  }
}

module.exports = Main;
