import React, { Component } from 'react';
import './App.css';

//  todo app experiment
class App extends Component {
  state={names:[],input:"",updateFlag:{flag:true,index:null}}

  handleInputChange = (e)=>{
    this.setState({input:e.target.value})
  }

  onFormSubmit=(e)=>{
    e.preventDefault()
    this.setState({names:[...this.state.names,this.state.input],input:""})    
  }

  handleEditFlag =(index)=>{
   this.setState({input:this.state.names[index],updateFlag:{flag:false,index:index}})
    
    
  }

  handleRemoveName=(index)=>{
   const names =  this.state.names
   names.splice(index,1)
   this.setState({names:[...names]})
    
  }

  handleUpdateChange=()=>{
    const names = this.state.names
    const {index} = this.state.updateFlag
    names[index] = this.state.input
    this.setState({names:[...names],input:"",updateFlag:{flag:true}})
  }


  render() {
    const names = this.state.names.map((name,index)=>{
      return(

        
          <table key={index}>
            <tr>
            <td ><div style={{width:"400px"}}><h4>{name}</h4></div></td>
            <td ><button type="button" className="mybtn" onClick={()=>this.handleEditFlag(index)}>Edit</button></td>
            <td ><button type="button" className="mybtn" onClick={()=>this.handleRemoveName(index)}>Remove</button></td>
          </tr>
          </table>
        
        // <div className="row mt-4">
        //   <div key={index} className="col" style={{border:"2px solid black"}}><h4>{name}</h4></div>
        //   <div><button className="btn btn-secondary col mx-2" type="click">Edit</button></div>
        //   <div><button className="btn btn-danger col ml-2" type="click">Remove</button></div>
        // </div>
      )
    })
    return (
      <>
      {this.state.updateFlag.flag ?

      <div className="container">
        <form onSubmit={this.onFormSubmit} >
        <table>
          <tr>
            <td><label htmlFor="">Name:</label></td>
            <td><input type="text" value={this.state.input} onChange={(e)=>this.handleInputChange(e)} required/></td>
            <td><button type="submit">Submit</button></td>
          </tr>
        </table>
        {names}
      </form>
      </div>
      :
      <div className="container">
        <form >
        <table>
      <tr>
        <td><input type="text" value={this.state.input} onChange={(e)=>this.handleInputChange(e)} required /></td>
        <td><button type="button" onClick={()=>this.handleUpdateChange()}>Update</button></td>
      </tr>
    </table>
        </form>
        </div>}
      </>
    )
  }
}

export default App;
