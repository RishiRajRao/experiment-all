componentDidMount() {
  this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000)
}

componentWillUnmount() {
  clearInterval(this.interval)
}

//to update a component every fixed time;


import React, { Component } from 'react'
import { Redirect } from 'react-router'

export default class LoginComponent extends Component {
  render() {
    if (this.state.isLoggedIn === true) {
      return <Redirect to="/your/redirect/page" />
    } else {
      return <div>{'Login Please'}</div>
    }
  }
}

//for redirecting to the preferred page if the user is logged in



const mapDispatchToProps = (dispatch) => ({
  action: () => dispatch(action())
 })
 const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(action, dispatch)
 })
 const mapDispatchToProps = { action }

//  The third option is just a shorthand for the first one.


class MyButton extends React.Component {
  // ...
}

MyButton.defaultProps = {
  color: 'red'
};


//If props.color is not provided then it will set the default value to 'red'. i.e, Whenever you try to access the color prop it uses default value

render() {
   return <MyButton /> ; // props.color will be set to red
 }

//example for default props if the props is not mentioned during the call of the child component in parent component.
