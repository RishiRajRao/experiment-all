import React from 'react';

class App5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
//This method is called after 2nd or nth number of render always periodically.
  componentDidUpdate(){
    document.getElementById('news').innerHTML = "Child element was deletd on this update";
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Header</button>
      <p id="news"></p>
      </div>
    );
  }
}

export default App5;

class Child extends React.Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }
  render() {
    return (
      <h1>Hello World!</h1>
    );
  }
}

// Note:-Here first child component was rendering but due to some situational necessity it was removed and hence it is calling an alert just before removal to user;