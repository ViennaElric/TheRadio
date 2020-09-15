import React, { Component } from 'react';
import './RadioComponent.css';
import RadioBodyComponent from './RadioBodyComponent';
import RightFootComponent from './RightFootComponent';
import LeftFootComponent from './LeftFootComponent';


class RadioComponent extends Component {
    constructor(props) {
      super(props);
      this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){
      console.log(this.props);
    }
    render(){
      return (
        <div className="RadioComponent">
        <RadioBodyComponent/>
        <RightFootComponent/>
        <LeftFootComponent/>
        </div>
      );
    }
}




export default RadioComponent;
