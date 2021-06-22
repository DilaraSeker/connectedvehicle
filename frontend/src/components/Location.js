import React, { Component } from 'react';


export default class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude:"",
      longitude:"",
      heading:""
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
    axios.get("localhost:8080/location",config)
      .then((data) => {
        console.log(data);
        this.setState({ latitude: data.latitude});
        this.setState({ longitude: data.longitude});
        this.setState({ heading: data.heading});
      })

    */
    //From Mock  
    const url = "https://mocki.io/v1/6124c97a-2c35-4b41-af21-1df4089b8e89";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ latitude: data.latitude});
    this.setState({ longitude: data.longitude});
    this.setState({ heading: data.heading});
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p className="first"><b>Latitude:</b></p>
            <p className="second"><b>Value: </b> {this.state.latitude.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.latitude.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.latitude.timestamp}</p> 
          </div>
          <div className="col-4">
            <p className="first"><b>Longitude:</b></p>
            <p className="second"><b>Value: </b> {this.state.longitude.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.longitude.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.longitude.timestamp}</p> 
          </div>
          <div className="col-4">
            <p className="first"><b>Heading:</b></p>
            <p className="second"><b>Value: </b> {this.state.heading.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.heading.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.heading.timestamp}</p> 
          </div>
        </div>
    
      </div>
    )
  }
}

