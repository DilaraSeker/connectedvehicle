import React, { Component } from 'react';


export default class Tires extends Component {
  constructor(props) {
    super(props);
      this.state = {
        tirepressurefrontleft:"",
        tirepressurefrontright:"",
        tirepressurerearleft:"",
        tirepressurerearright:""
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
    axios.get("localhost:8080/tires",config)
      .then((data) => {
        console.log(data);
        this.setState({ tirepressurefrontleft: data.tirepressurefrontleft});
        this.setState({ tirepressurefrontright: data.tirepressurefrontright});
        this.setState({ tirepressurerearleft: data.tirepressurerearleft});
        this.setState({ tirepressurerearright: data.tirepressurerearright});
      })
    */

    //From mock json  
    const url = "https://mocki.io/v1/2a46a426-74f2-4e52-813f-eccb13f36d17";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ tirepressurefrontleft: data.tirepressurefrontleft});
    this.setState({ tirepressurefrontright: data.tirepressurefrontright});
    this.setState({ tirepressurerearleft: data.tirepressurerearleft});
    this.setState({ tirepressurerearright: data.tirepressurerearright});
  
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <p className="first"><b>Vehicle Tire Pressure Front Left:</b></p>
            <p className="second"><b>Unit: </b> {this.state.tirepressurefrontleft.unit}</p>
            <p className="second"><b>Value: </b> {this.state.tirepressurefrontleft.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.tirepressurefrontleft.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.tirepressurefrontleft.timestamp}</p> 
          </div>
          <div className="col-6">
            <p className="first"><b>Vehicle Tire Pressure Front Right:</b></p>
            <p className="second"><b>Unit: </b> {this.state.tirepressurefrontright.unit}</p>
            <p className="second"><b>Value: </b> {this.state.tirepressurefrontright.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.tirepressurefrontright.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.tirepressurefrontright.timestamp}</p> 
          </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-6">
            <p className="first"><b>Vehicle Tire Pressure Rear Left:</b></p>
            <p className="second"><b>Unit: </b> {this.state.tirepressurerearleft.unit}</p>
            <p className="second"><b>Value: </b> {this.state.tirepressurerearleft.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.tirepressurerearleft.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.tirepressurerearleft.timestamp}</p> 
          </div>
          <div className="col-6">
            <p className="first"><b>Vehicle Tire Pressure Rear Right:</b></p>
            <p className="second"><b>Unit: </b> {this.state.tirepressurerearright.unit}</p>
            <p className="second"><b>Value: </b> {this.state.tirepressurerearright.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.tirepressurerearright.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.tirepressurerearright.timestamp}</p> 
          </div>
        </div> 
      </div>
    )
  }
}

