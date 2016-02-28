import React from 'react';

class CreateEvent extends React.Component {


  render() {
    let newEventHeader = "Create new event";

    return(
      <div className="column is-4 is-offset-4">
        <div className="event">
          <div className="event_header">
            {newEventHeader}
          </div>
          <div className="event_body">
            <p className="eventLabel">Event: </p><input className="inputEvent" type="text"></input>
            <p className="eventLabel">Time: </p><input className="inputEvent" type="text"></input>
            <p>Select Slack team members:</p>
            <input className="inputUsers" type="text"></input>
            <button className="button eventSave pull-right">Save</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateEvent;
