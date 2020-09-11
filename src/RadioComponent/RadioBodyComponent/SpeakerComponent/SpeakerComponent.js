import React, { Component } from 'react';
import './SpeakerComponent.css';

class SpeakerComponent extends Component {
    constructor(props) {
      super(props);
      this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(){
      console.log(this.props);
    }

    render(){
      return (
        <div className="SpeakerComponent">
          <p> speaker </p>
        </div>
      );
    }
}

export default SpeakerComponent;
