import React, { Component } from 'react'

 class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }
  //  here this method ask whteher to update or not based on true and false condition. As flow is from topto bottom this will always comes before render hnece the benefits.
  shouldComponentUpdate() {
    return true;
  }
  changeColor = () => {
    this.setState({favoritecolor: "blue"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

export default App2;
