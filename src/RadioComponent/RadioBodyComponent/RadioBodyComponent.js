import React, { Component } from 'react';
import './RadioBodyComponent.css';
import RadioFaceComponent from './RadioFaceComponent'

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
          <RadioFaceComponent/>
        </div>
      );
    }
}

export default RadioBodyComponent;
