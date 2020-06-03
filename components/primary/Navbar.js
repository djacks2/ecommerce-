import React from 'react';
export default class Navbar extends React.Component{
    render(){
        return (
  
            <nav className="navbar">
              <div className="hamburger--container">
                <div className="hamburger--line line--1" />
                <div className="hamburger--line line--2" />
                <div className="hamburger--line line--3" />
              </div>
              <ul className="ul--navlinks">
                <li><a href="index.html">Home</a></li>
                <li><a href="product.html">Listen</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          );
    }
};
   
 

  