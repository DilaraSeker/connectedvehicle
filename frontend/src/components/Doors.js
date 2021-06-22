import React, { Component } from 'react';
import LockButton from './LockButton';

export default class Doors extends Component {
    constructor(props) {
        super(props);
          this.state = {
            doorstatusfrontleft:"",
            doorstatusfrontright:"",
            doorstatusrearleft:"",
            doorstatusrearright:"",
            doorlockstatusfrontleft:"",
            doorlockstatusfrontright:"",
            doorlockstatusrearleft:"",
            doorlockstatusrearright:"",
            doorlockstatusdecklid:"",
            doorlockstatusgas:"",
            doorlockstatusvehicle:""
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
      
  axios.get("localhost:8080/doors",config)
   .then((data) => {
        console.log(data);
      this.setState({ doorstatusfrontleft: data.doorstatusfrontleft});
      this.setState({ doorstatusfrontright: data.doorstatusfrontright});
      this.setState({ doorstatusrearleft: data.doorstatusrearleft});
      this.setState({ doorstatusrearright: data.doorstatusrearright});
      this.setState({ doorlockstatusfrontleft: data.doorlockstatusfrontleft});
      this.setState({ doorlockstatusfrontright: data.doorlockstatusfrontright});
      this.setState({ doorlockstatusrearleft: data.doorlockstatusrearleft});
      this.setState({ doorlockstatusrearright: data.doorlockstatusrearright});
      this.setState({ doorlockstatusdecklid: data.doorlockstatusdecklid});
      this.setState({ doorlockstatusgas: data.doorlockstatusgas});
      this.setState({ doorlockstatusvehicle: data.doorlockstatusvehicle});
        })
 */  
 //from mock
    const url = "https://mocki.io/v1/03b7b97d-c007-4d08-bdbc-ef3741e9ca2c";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ doorstatusfrontleft: data.doorstatusfrontleft});
    this.setState({ doorstatusfrontright: data.doorstatusfrontright});
    this.setState({ doorstatusrearleft: data.doorstatusrearleft});
    this.setState({ doorstatusrearright: data.doorstatusrearright});
    this.setState({ doorlockstatusfrontleft: data.doorlockstatusfrontleft});
    this.setState({ doorlockstatusfrontright: data.doorlockstatusfrontright});
    this.setState({ doorlockstatusrearleft: data.doorlockstatusrearleft});
    this.setState({ doorlockstatusrearright: data.doorlockstatusrearright});
    this.setState({ doorlockstatusdecklid: data.doorlockstatusdecklid});
    this.setState({ doorlockstatusgas: data.doorlockstatusgas});
  }

  render() {
    return (
      <div className="container">
          <p></p>
        <div className="row">
          <div className="col-3">
            <p className="first"><b>Door Status Front Left:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorstatusfrontleft.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorstatusfrontleft.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorstatusfrontleft.timestamp}</p> 
          </div>
          <div className="col-3">
            <p className="first"><b>Door Status Front Right:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorstatusfrontright.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorstatusfrontright.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorstatusfrontright.timestamp}</p> 
          </div>
          <div className="col-3">
            <p className="first"><b>Door Status Rear Left:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorstatusrearleft.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorstatusrearleft.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorstatusrearleft.timestamp}</p> 
          </div>
          <div className="col-3">
            <p className="first"><b>Door Status Rear Right:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorstatusrearright.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorstatusrearright.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorstatusrearright.timestamp}</p> 
          </div>
        </div>  
        <p></p>  
        <div className="row">  
          
          <div className="col-3">
            <p className="first"><b>Lock Status Front Left:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorlockstatusfrontleft.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorlockstatusfrontleft.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorlockstatusfrontleft.timestamp}</p> 
          </div>
          <div className="col-3">
            <p className="first"><b>Lock Status Front Right:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorlockstatusfrontright.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorlockstatusfrontright.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorlockstatusfrontright.timestamp}</p> 
          </div>
          <div className="col-3">
            <p className="first"><b>Lock Status Rear Left:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorlockstatusrearleft.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorlockstatusrearleft.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorlockstatusrearleft.timestamp}</p> 
          </div>
          <div className="col-3">
            <p className="first"><b>Lock Status Rear Right:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorlockstatusrearright.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorlockstatusrearright.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorlockstatusrearright.timestamp}</p> 
          </div>
        </div>
        <p></p>
        <div className="row">
          <div className="col-3">
            <p className="first"><b>Decklid Status:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorlockstatusdecklid.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorlockstatusdecklid.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorlockstatusdecklid.timestamp}</p> 
          </div>
          <div className="col-3">
            <p className="first"><b>Gas Lock Status:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorlockstatusgas.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorlockstatusgas.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorlockstatusgas.timestamp}</p> 
          </div>
          <div className="col-3">
            <p className="first"><b>Vehicle Lock Status:</b></p>
            <p className="second"><b>Value: </b> {this.state.doorlockstatusvehicle.value}</p>
            <p className="second"><b>Retrieval Status: </b> {this.state.doorlockstatusvehicle.retrievalstatus}</p>
            <p className="second"><b>Time Stamp</b> {this.state.doorlockstatusvehicle.timestamp}</p> 
          </div>
          <div className="col-3">   
            <LockButton/>
          </div>
        </div>  
      </div>
    )
  }
}

