import React from 'react';
class App7 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "BMW",
      color: "Black"
    };
  }
 
  changeColor() {
    // this.setState(prevState => {
    //   return { color: "Red" };
    // });
    this.setState({ color: "Red",brand:"volvo"});
  }
 
  render() {
    return (
      <div>
        <button onClick={() => this.changeColor()}>Change Color</button>
        <p>{this.state.color}</p>
        <p>{this.state.brand}</p>
      </div>
    );
  }
 }

 export default App7;

 //Lerning howto chnage the state object values;