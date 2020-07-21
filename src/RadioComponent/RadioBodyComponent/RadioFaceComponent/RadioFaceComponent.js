import React, { Component } from 'react';
import './RadioFaceComponent.css'
import RadioControlsComponent from './RadioControlsComponent/index'

class RadioFaceComponent extends Component {
    constructor(props) {
      super(props);
      this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){
      console.log(this.props);
    }
    render(){
      return (
        <div className="RadioFaceComponent">
          <RadioControlsComponent/>
        </div>
      );
    }
 }



export default RadioFaceComponent;
