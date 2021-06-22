import React, {Component} from 'react';
import '../css/Body.css';
import AboutVehicle from "./AboutVehicle";
import Vehicle from "./Vehicle";
import OAuth2Login from 'react-simple-oauth2-login';
import axios from 'axios';

const onFailure = response => console.error(response);

export default class Body extends Component {
  constructor(props){
    super(props);
    this.toggleAboutVehicle = this.toggleAboutVehicle.bind(this);
    this.toggleVehicle = this.toggleVehicle.bind(this);
    this.onSuccess=this.onSuccess.bind(this);

    this.state = {isSuccess:false}; 
    this.state = {isClickedAboutVehicle:false};
    this.state = {isClickedVehicle:false}; 
    this.state = {data:""};      
  }
  toggleAboutVehicle = () => {
    this.setState({
      isClickedAboutVehicle: !this.state.isClickedAboutVehicle,
      isClickedVehicle : false,
    })
  }
  toggleVehicle = () => {
    this.setState({
      isClickedVehicle: !this.state.isClickedVehicle,
      isClickedAboutVehicle: false,      
    })
  }
  onSuccess = response => {
    console.log(response);
    const params = new URLSearchParams()
          params.append('grant_type', 'authorization_code')
          params.append('code',response["code"] )
          params.append('redirect_uri', "http://localhost:3000/")
      
          const config = {
            headers: {
              'Authorization': 'Basic MWE0NDdiNDMtYjU0ZS00YjZjLWE5Y2ItN2RkYWMxMTM4YmQ2Ok9GRm1ia21QVGhvZmRMbkFqTVhnZkdFbWxod0h5dmdWQkNVbHh2SWpPVEhidXFLUE9wYWJ5VHZhb2RmaVNhUWU',
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
          axios.post("https://id.mercedes-benz.com/as/token.oauth2",params, config)
            .then((result) => {
              console.log(result);
            //datanın içindeki access tokenı kaydet
              this.setState({ data: result.data});
            })
            this.setState({isSuccess : true})
                  
      }
    
  render(){ 
    if(this.state.isSuccess){
      return ( 
        <div className="row"> 
          <div className="row">
              <center>
              <p className="head"><b>VEHICLE</b></p>
              <p></p>
              <button className="btn btn-secondary " id="body-button" onClick = {this.toggleAboutVehicle}> About Vehicle </button>
              <button className="btn btn-secondary" id="body-button" onClick = {this.toggleVehicle}> Vehicle </button> 
              </center>   
          </div>
          <div className="row" >
            {this.state.isClickedAboutVehicle && <div><AboutVehicle accessToken={this.state.data} /></div>}         
            {this.state.isClickedVehicle && <div> <Vehicle accessToken={this.state.data}/></div>}  
          </div>
        </div>     
            );
    }
    else{
     return ( 
      <div>    
        <div className="col " ></div>  
         <center>
         <div className="col-5 p-5" >
             <br></br><br></br><br></br><br></br><br></br><br></br>
             <p>Sign in with the Mercedes me ID and consent is needed to allow the application to retrieve and use personal vehicle data.</p> 
             <OAuth2Login
                 className="btn btn-secondary"
                 id="connect-button"
                 buttonText=" Connect "
                 authorizationUrl="https://id.mercedes-benz.com/as/authorization.oauth2"
                 responseType="code"
                 clientId="1a447b43-b54e-4b6c-a9cb-7ddac1138bd6"
                 redirectUri="http://localhost:3000/"
                 onSuccess={this.onSuccess}
                 onFailure={onFailure}
             />  
         </div>  
         </center>  
         <div className="col" ></div>
      </div>
       
             
         
     )
     }     
   }
 }







