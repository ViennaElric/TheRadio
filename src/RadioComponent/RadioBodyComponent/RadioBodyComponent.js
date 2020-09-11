import React, { Component } from 'react';
import './RadioBodyComponent.css';
import RadioFaceComponent from './RadioFaceComponent';
import SpeakerComponent from './SpeakerComponent';

class RadioBodyComponent extends Component {
    constructor(props) {
      super(props);
      this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(){
      console.log(this.props);
    }

    render(){
      return (
        <div className="RadioBodyComponent">
          <SpeakerComponent/>
          <RadioFaceComponent/>
        </div>

      );
    }
}

export default RadioBodyComponent;
