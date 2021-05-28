import React, { Component } from 'react'

class App4 extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
    "Before the update, the favorite was " + prevState.favoritecolor;
    console.log("snapshotBefore===",prevState.favoritecolor)
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1000)
  }
  
  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The updated favorite is " + this.state.favoritecolor;
    console.log("snapshotUpdatedStatus===",this.state.favoritecolor)

  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <div id="div1"></div>
      <div id="div2"></div>
      </div>
    );
  }
}

export default App4;

// Note:-when a component is removed from the DOM, or unmounting as React likes to call it.
