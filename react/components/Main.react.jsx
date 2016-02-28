import React from 'react';
import ReactDOM from 'react-dom';
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

  constructor(props) {
    super(props);
    this.state = {
      newEventActive : false,
      modal: <CreateEvent close={this.closeEvent.bind(this)} />
    }
    getData()
  }

  getData() {
    $.ajax({
      url: "https://udown.localtunnel.me/v1/events/lggv2gyvepPu",
      type: "GET",
      success: (data) => (console.log(data)),
      error: (err) => (console.log("boooo"))
    })
  }

  addNewEvent() {
    this.setState({
      newEventActive : true,
      modal: <CreateEvent close={this.closeEvent.bind(this)} />
    })
  }

  closeEvent() {
    this.setState({
      newEventActive : false,
      modal: null
    })
  }

  render() {
    let isActive = this.state.newEventActive ? "is-active" : "";
    return(
      <div className="">
        <Header />
        <div className={"modal " + isActive}>
          <div className="modal-background"></div>
          <div className="modal-container">
            <div ref="modalContent" className="modal-content">
              {this.state.modal}
            </div>
          </div>
          <button className="modal-close" onClick={this.closeEvent.bind(this)}></button>
        </div>
        <div className="columns">
          <EventList events={data.events}/>
          <div className="column is-1 is-offset-3 add_event">
            <PlusButton onClick={this.addNewEvent.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;
