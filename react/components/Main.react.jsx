import React from 'react';
import Header from './Header/Header.react.jsx';
import EventList from './Events/EventList.react.jsx';
import CreateEvent from './CreateEvent/CreateEvent.react.jsx';
import PlusButton from './CreateEvent/PlusButton.react.jsx';
let data = {
  events : [
    {
      name: "Lunch",
      location: "Chipotle",
      time: "1pm",
      attendees: [
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        }
      ],
      invited: [
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        }
      ]
    },
    {
      name: "Lunch",
      location: "Chipotle",
      time: "1pm",
      attendees: [
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        }
      ],
      invited: [
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        },
        {
          name: "Jane Gonzales",
          image: "http://img06.deviantart.net/3c50/i/2005/096/e/3/minimalist_headshot_stock_2_by_kristyvictoria.jpg",
          team: "Strongpoop"
        }
      ]
    }
  ]
};

class Main extends React.Component {

  addNewEvent() {
      console.log("add me boi");
  }

  render() {

    return(
      <div className="">
        <Header />
        <div className="columns">
          <EventList events={data.events}/>
          <div className="column is-1 is-offset-3 add_event">
            <PlusButton onClick={this.addNewEvent}/>
          </div>
        </div>
        <CreateEvent/>
      </div>
    );
  }
}

module.exports = Main;
