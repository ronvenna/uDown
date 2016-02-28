import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header.react.jsx';
import EventList from './Events/EventList.react.jsx';
import CreateEvent from './CreateEvent/CreateEvent.react.jsx';
import PlusButton from './CreateEvent/PlusButton.react.jsx';

class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newEventActive : false,
      modal: <CreateEvent close={this.closeEvent.bind(this)} />
    }
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
