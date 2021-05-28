import React, { Component } from 'react';

 class App11 extends Component {
   state={time:new Date().toLocaleTimeString()}
   
   componentDidMount(){
    var timer= setInterval(()=>this.setState({time:new Date().toLocaleTimeString()}),1000);
   console.log("called after re-render");

   }


  render() {
    return (
      <div>
        <h1>The time now is:{new Date().toLocaleTimeString()}</h1>
        <h1>The time now is:{this.state.time}</h1>
      </div>
    )
  }
}

export default App11;
