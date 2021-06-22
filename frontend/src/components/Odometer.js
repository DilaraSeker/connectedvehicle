import React, { Component } from 'react';


export default class Odometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      odometer:"",
      distancesincereset:"",
      distancesincestart:""
    };
  }
  async componentDidMount() {
    /*
    //From backend
    const config = {
      method: 'GET',
      headers: {
       'Authorization': this.props.accessToken ,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    axios.get("localhost:8080/odometer",config)
      .then((data) => {
        console.log(data);
        this.setState({ odometer: data.odometer});
        this.setState({ distancesincereset: data.distancesincereset});
        this.setState({ distancesincestart: data.distancesincestart});
      })

    */

    //From Mock
    const url = "https://mocki.io/v1/5ac5bcdc-d1c4-49e8-b7b2-7fce72652685";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ odometer: data.odometer});
    this.setState({ distancesincereset: data.distancesincereset});
    this.setState({ distancesincestart: data.distancesincestart});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p className="first"><b>Odometer:</b></p>
            <p className="second"><b>Unit: </b> {this.state.odometer.unit}</p>
            <p className="second"><b>Value: </b> {this.state.odometer.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.odometer.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.odometer.timestamp}</p> 
          </div>
          <div className="col-4">
            <p className="first"><b>Distance Since Reset:</b></p>
            <p className="second"><b>Unit: </b> {this.state.distancesincereset.unit}</p>
            <p className="second"><b>Value: </b> {this.state.distancesincereset.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.distancesincereset.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.distancesincereset.timestamp}</p> 
          </div>
          <div className="col-4">
            <p className="first"><b>Distance Since Start:</b></p>
            <p className="second"><b>Unit: </b> {this.state.distancesincestart.unit}</p>
            <p className="second"><b>Value: </b> {this.state.distancesincestart.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.distancesincestart.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.distancesincestart.timestamp}</p> 
          </div>
        </div>
    
      </div>
    )
  }
}

