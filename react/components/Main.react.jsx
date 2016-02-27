import React from 'react';
import Header from './Header/Header.react.jsx';
import EventList from './Events/EventList.react.jsx';

class Main extends React.Component {
  render() {
    return(
      <div className="">
        <Header />
        <div className="columns">
          <EventList />
        </div>
      </div>
    );
  }
}

module.exports = Main;
