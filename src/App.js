import React, { Component } from 'react';
import './App.css';
import './RadioComponent.css';
import './RadioBodyComponent.css'
import './RadioFaceComponent.css'
import './RadioControlComponent.css'


class RadioComponent extends React.Component {
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
        //  <button onClick={this.handleEvent}>Clickity Click</button>
        <RadioBodyComponent/>
        </div>
      );
    }
}


class RadioBodyComponent extends React.Component {
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


class RadioControlsComponent extends React.Component {
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



  class RadioFaceComponent extends React.Component {
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



function App() {
  //<div className="App">
  return (

    <div className="App">
      <RadioComponent/>
    </div>
  );
}

export default App;
