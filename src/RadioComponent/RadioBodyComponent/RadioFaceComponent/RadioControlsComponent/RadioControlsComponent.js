import React, { Component } from 'react';
import './RadioControlsComponent.css'


class RadioControlsComponent extends Component {
    constructor(props) {
      super(props);
      this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent(){
      console.log(this.props);
    }
    render(){
      return (
        <div className="RadioControlsComponent">
          <p>hello</p>
        </div>
      );
    }
}

export default RadioControlsComponent;
