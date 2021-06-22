import React, {Component} from 'react';
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";

export default class Body extends Component {
  
    constructor(props){
        super(props);
        this.toggleLock = this.toggleLock.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
        
        this.state = {isClickedLock:false};
        this.state = {isClickedOpen:false}; 
      }
      toggleLock = () => {
        this.setState({
            isClickedLock: !this.state.isClickedLock,
            isClickedOpen : false,
        })
      }
      toggleOpen = () => {
        this.setState({
            isClickedOpen: !this.state.isClickedOpen,
            isClickedLock: false,      
        })
      }   
    
  render(){ 
      return (
        <div className="row"> 
            <p></p>
            <button className="btn btn-secondary " id="lock-button" onClick = {this.toggleLock}> Lock <FaLock/></button>
             <p></p>
            <button className="btn btn-secondary" id="lock-button" onClick = {this.toggleOpen}> Unlock <FaLockOpen/> </button> 
        </div>  
            );
      }



}


