import React, { Component } from 'react';
import './RadioComponent.css';
import AntennaComponent from './AntennaComponent';
import RadioBodyComponent from './RadioBodyComponent';
import LeftFootComponent from './FeetComponent/LeftFootComponent';
import RightFootComponent from'./FeetComponent/RightFootComponent';



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
        <AntennaComponent/>
        <RadioBodyComponent/>
        <div className="Feet">
          <LeftFootComponent/>
          <RightFootComponent/>
        </div>

        </div>
      );
    }
}




export default RadioComponent;
