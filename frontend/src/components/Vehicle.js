import React, { Component } from 'react';
import Tires from "./Tires";
import Doors from "./Doors";
import Location from "./Location";
import Odometer from "./Odometer";
import Fuel from "./Fuel";
import Charge from "./Charge";

export default class Vehicle extends Component {
    constructor(props){
        super(props);
        this.toggleTires = this.toggleTires.bind(this);
        this.toggleDoors = this.toggleDoors.bind(this);
        this.toggleLocation = this.toggleLocation.bind(this);
        this.toggleOdometer = this.toggleOdometer.bind(this);
        this.toggleFuel = this.toggleFuel.bind(this);
        this.toggleCharge = this.toggleCharge.bind(this);
    
        this.state = {isClickedTires:false};
        this.state = {isClickedDoors:false}; 
        this.state = {isClickedLocation:false};
        this.state = {isClickedOdometer:false}; 
        this.state = {isClickedFuel:false};  
        this.state = {isClickedCharge:false};  

    }
    toggleTires = () => {
        this.setState({
            isClickedTires: !this.state.isClickedTires,
            isClickedDoors : false,
            isClickedLocation: false,
            isClickedOdometer:false,
            isClickedFuel:false,
            isClickedCharge:false,
        })
    }
    toggleDoors = () => {
        this.setState({
            isClickedDoors: !this.state.isClickedDoors,
            isClickedTires : false,
            isClickedLocation: false,
            isClickedOdometer:false,
            isClickedFuel:false,
            isClickedCharge:false,
        })
    }
    toggleLocation = () => {
        this.setState({
            isClickedLocation: !this.state.isClickedLocation,
            isClickedTires : false,
            isClickedDoors: false,
            isClickedOdometer:false,
            isClickedFuel:false,
            isClickedCharge:false,
        })
    } 
    toggleOdometer = () => {
      this.setState({
          isClickedOdometer: !this.state.isClickedOdometer,
          isClickedLocation: false,
          isClickedTires : false,
          isClickedDoors: false,
          isClickedFuel:false,
          isClickedCharge:false,
      })
    }
    toggleFuel = () => {
      this.setState({
          isClickedFuel: !this.state.isClickedFuel,
          isClickedLocation:false,
          isClickedTires : false,
          isClickedDoors: false,
          isClickedOdometer:false,
          isClickedCharge:false,
      })
    }
    toggleCharge = () => {
      this.setState({
          isClickedCharge: !this.state.isClickedCharge,
          isClickedLocation:false,
          isClickedTires : false,
          isClickedDoors: false,
          isClickedOdometer:false,
          isClickedFuel:false,
      })
    }
       

    
  render() {
    return (
      <div className="row">  
          <div className="col-sm-2 p-4">
            <div className="list-group" >
              <button className="list-group-item list-group-item-action btn-secondary" id="list-button" onClick = {this.toggleTires}> Tires </button>
              <button className="list-group-item list-group-item-action btn-secondary" id="list-button" onClick = {this.toggleDoors}> Doors </button> 
              <button className="list-group-item list-group-item-action btn-secondary" id="list-button" onClick = {this.toggleLocation} > Location </button> 
              <button className="list-group-item list-group-item-action btn-secondary" id="list-button" onClick = {this.toggleOdometer}> Odometer </button>
              <button className="list-group-item list-group-item-action btn-secondary" id="list-button" onClick = {this.toggleFuel}> Fuel </button> 
              <button className="list-group-item list-group-item-action btn-secondary" id="list-button" onClick = {this.toggleCharge}> State of Charge </button>  
            </div>
          </div>
          <div className="col-sm-10 align-self-center  " >
          {this.state.isClickedTires && <Tires accessToken={this.props.accessToken}/>} 
          {this.state.isClickedDoors && <Doors accessToken={this.props.accessToken}/>}
          {this.state.isClickedLocation && <Location accessToken={this.props.accessToken}/>}
          {this.state.isClickedOdometer && <Odometer accessToken={this.props.accessToken}/>}
          {this.state.isClickedFuel && <Fuel accessToken={this.props.accessToken}/>}    
          {this.state.isClickedCharge && <Charge accessToken={this.props.accessToken}/>}   
          </div>
           

      </div>     
    )
  }
}

