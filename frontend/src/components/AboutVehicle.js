import React, { Component } from 'react';
import axios from 'axios';

export default class AboutVehicle extends Component {
  constructor(props) {
    super(props);
      this.state = {
        vehicle: ""
       };
  }
  async componentDidMount() {
  //From backend
  /*
    const config = {
      method: 'GET',
      headers: {
        'Authorization': this.props.accessToken ,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
      axios.get("localhost:8080/aboutVehicle",config)
        .then((result) => {
          console.log(result);
          this.setState({ vehicle: result.data});
        })
  */
  //From mock json  
    axios.get("https://mocki.io/v1/c941e985-e388-47fe-8a00-6ba0e1b08038")
      .then((result) => {
      console.log(result);
      this.setState({ vehicle: result.data});
      })
    }

  render() {
    return (
      <div className="row"> 
        
          <center><p className="column-head"><b>About Vehicle</b></p>
          <p><b>Vehicle ID:</b> {this.state.vehicle.id}</p>
          <p><b>Vehicle Licenseplate:</b> {this.state.vehicle.licenseplate}</p>
          <p><b>Vehicle Sales Designation:</b> {this.state.vehicle.salesdesignation}</p>
          <p><b>Vehicle Fin or Vin:</b> {this.state.vehicle.finorvin}</p>
          <p><b>Vehicle Model Year:</b> {this.state.vehicle.modelyear}</p>
          <p><b>Vehicle Colorname:</b> {this.state.vehicle.colorname}</p>
          <p><b>Vehicle Fuel Type:</b> {this.state.vehicle.fueltype}</p>
          <p><b>Vehicle Power HP:</b> {this.state.vehicle.powerhp}</p>
          <p><b>Vehicle Power KW:</b> {this.state.vehicle.powerkw}</p>
          <p><b>Vehicle Number of doors:</b> {this.state.vehicle.numberofdoors}</p>
          <p><b>Vehicle Number of seats:</b> {this.state.vehicle.numberofseats}</p>
          </center>
        
      </div>     
    )
  }
}

