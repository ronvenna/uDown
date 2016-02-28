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
      modal: <CreateEvent close={this.closeEvent.bind(this)} />,
      data: [],
      error: false
    }
    this.getData()
  }

  getData() {
    let id = window.location.search.split('?id=')[1];
    $.ajax({
      url: "https://u-down-web-socket-controller.herokuapp.com/v1/events/" + id,
      type: "GET",
      success: (data) => (
        this.setState({
          data : [data]
        })
      ),
      error: (err) => (
        this.setState({
          error : true
        })
      )
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
    console.log(this.state.data);
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
          <EventList events={this.state.data} error={this.state.error}/>
          <div className="column is-1 is-offset-3 add_event">
            <PlusButton onClick={this.addNewEvent.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;
