import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Body from './Body';

export default class Home extends Component {
  constructor(props){
    super(props);
   
  }

  render() {
    return (
      <div>    
        <div className="row" id="Header">
          <div className= "col-md-12" >
            <Header/>
          </div>
        </div>
        <div className="row " id="Body">
          <div className= "col-md-12" >
            <Body />
          </div>
        </div>
        <div className="row" id="Footer">
         
        </div>
      </div>
        
      )
   
  }
}





