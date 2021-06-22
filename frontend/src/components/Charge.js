import React, { Component } from 'react';


export default class Charge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charge:"",
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
    axios.get("localhost:8080/stateOfCharge",config)
      .then((data) => {
        console.log(data);
        this.setState({ charge: data});
      })

    */
    //From Mock
    const url = "https://mocki.io/v1/c12f3468-cbac-41ed-b23a-167967cc3918";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ charge: data});
       
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="first"><b>State of charge:</b></p>
            <p className="second"><b>Unit: </b> {this.state.charge.unit}</p>
            <p className="second"><b>Value: </b> {this.state.charge.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.charge.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.charge.timestamp}</p> 
          </div>
        </div>
      </div>
    )
  }
}

