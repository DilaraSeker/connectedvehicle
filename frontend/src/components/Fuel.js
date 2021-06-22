import React, { Component } from 'react';


export default class Fuel extends Component {
  constructor(props) {
    super(props);
      this.state = {
        fuel:"",
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
    axios.get("localhost:8080/fuelLevel",config)
      .then((data) => {
        console.log(data);
        this.setState({ fuel: data});
      })

    */
    //From Mock
    const url = "https://mocki.io/v1/98418fed-62dc-4957-9311-201e6e3485c4";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ fuel: data});
       
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="first"><b>Fuel:</b></p>
            <p className="second"><b>Unit: </b> {this.state.fuel.unit}</p>
            <p className="second"><b>Value: </b> {this.state.fuel.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.fuel.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.fuel.timestamp}</p> 
          </div>
          
        </div>
    
      </div>
    )
  }
}

