import React, { Component } from 'react';
import 'styles/Header.css';

export default class Header extends Component {
  render() {
  	const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  	const date 		   = new Date();
  	const month 	   = monthNames[date.getMonth()];
  	const day 		   = date.getDate();
  	const year 		   = date.getFullYear();

    return (
      <div className="col-md-6 col-centered header-date">
		    <h1><strong>Today</strong></h1>	
		    <h4>{month} {day}, {year}</h4>
      </div>
    );
  }
}