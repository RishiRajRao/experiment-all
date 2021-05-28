import React, { Component } from 'react'

 class App12 extends Component {
  state={counter:0}

   increment=()=>{
    this.setState(prevState=>({counter:this.state.counter+1}));
   }
   decrement=()=>{
     if(this.state.counter>0)
    this.setState(prevState=>({counter:this.state.counter-1}));
   }
  render() {
    return (
      <>
       <h1>The counter value is:{this.state.counter}</h1>
      <div style={{display:"flex"}}>
        <button className="btn btn-primary" onClick={this.increment}>+</button>
        <button className="btn btn-primary ml-4" onClick={this.decrement}>-</button>
      </div>
     
      </>
    )
  }
}

export default App12;


// import react, {useState} from 'react';

// function App11() {
//   const [counter,setCounter] = useState(0);
//   return (
//     <div>
//       <h1>The value of counter is:{counter}</h1>
//       <button onClick={()=>setCounter(counter+1)}>+1</button>
//       <button onClick={()=>setCounter(counter>0?counter-1:0)}>-1</button>
//     </div>
//   )
// }

// export default App11;
