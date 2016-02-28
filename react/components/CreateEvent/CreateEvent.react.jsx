import React from 'react';
import ReactDOM from 'react-dom'
class CreateEvent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      saving: false,
      savingText: "Save"
    }
  }

  saveEvent() {
    this.setState({
      savingText: ""
    })
    this.props.close();
  }

  render() {
    let newEventHeader = "Create new event";
    let saving = this.state.saving ? "is-loading" : "";
    return(
      <div className="">
        <div className="event">
          <div className="event_header">
            {newEventHeader}
          </div>
          <div className="event_body create_event">
            <div className="columns">
              <span className="eventLabel column is-2">Event: </span>
              <input className="eventInput column is-10" type="text"></input>
            </div>
            <div className="columns">
              <span className="eventLabel column is-2">Time: </span>
              <input className="eventInput column is-10" type="text"></input>
            </div>
            <div className="columns">
              <span className="eventLabel column is-2">Invite: </span>
              <textarea className="eventInput column is-12" type="text"></textarea>
            </div>

            <a ref="save" className={"button eventSave is-pulled-right " + saving} onClick={this.saveEvent.bind(this)}>{this.state.savingText}</a>

          </div>
        </div>
      </div>
    )
  }
}

export default CreateEvent;
