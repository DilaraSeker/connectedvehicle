import React, { Component } from 'react';
import '../css/Header.css';
import logo from './logo/logo-MB.png';
import logo1 from './logo/logo.png';

export default class Header extends Component {
  render() { 
    return (
      <div  className="row">
        <div className="col-md-12">
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark  ">
            <div className= "container">
	          <div className="navbar-brand">
                <a id="logo" href="https://developer.mercedes-benz.com/"  title="MB" >       
                  <img src={logo} className="Header-logo" alt="logo" />
                </a>
              </div>	
              <button className="navbar-toggler" data-toggle="collapse" data-target="#menu" type="button" >
                <span className="navbar-toggler-icon"></span>
              </button>
	           <div className="collapse navbar-collapse" id="menu">
		          <ul className="navbar-nav ml-auto ">
			        <li className="nav-item">
				      <a className="nav-link text-white" href="https://developer.mercedes-benz.com/products">APIs</a>
			        </li>
			        <li className="nav-item">
				      <a className="nav-link text-white" href="https://developer.mercedes-benz.com/contact">CONTACT</a>
			        </li>
                    <li className="nav-item">
				      <a className="nav-link text-white" href="https://developer.mercedes-benz.com/inspire">INSPIRE</a>
			        </li>
                    <li className="nav-item">
				      <a className="nav-link text-white" href="https://developer.mercedes-benz.com/news">WHAT'S NEW</a>
			        </li>
                    <li className="nav-item">
				      <a className="nav-link text-white" href="https://developer.mercedes-benz.com/console">CONSOLE</a>
			        </li>
		          </ul>
                  <div>
                    <a  id="logo" href="https://developer.mercedes-benz.com/"  title="MB" >       
                      <img src={logo1} className="Header-logo  d-none d-none d-lg-block" alt="logo" />
                    </a>
                </div>
	            </div> 
            </div>
          </nav>	
        </div>
      </div>  	
    );
  }
}

