import React, { Component } from "react";
import "./App1.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="custom-nav">
          <a href="#a">Home</a>
          <a href="#B">About</a>
          <a href="#C">Contacts</a>
          <div className="dropdown">
            <button className="drop-btn">Droplist</button>
            <div className="drop-list">
              <a href="#a">List1</a>
              <a href="#b">List2</a>
              <a href="#c">List3</a>
              <a href="#d">List4</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


{/* <div class="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <div class="dropdown">
    <button class="dropbtn">Dropdown 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
</div> */}
