import React, {Component}from 'react';
import './App.css';


class App extends Component{
state ={
  numberOfLikes: 0,
  like: "Likes"

}
handleClick=(e)=>{
  // this.setState(e => {
  //   return {numberOfLikes: e.numberOfLikes +1}
  // })
  // if(this.state.numberOfLikes === 0){
  //   this.setState(e => {
  //     return { like : e.like = "Like"}
  //   })
  // } else{
  //   this.setState(e => {
  //     return { like: e.like = "Likes"}
  //   })
  // }

  this.setState({
    numberOfLikes: this.state.numberOfLikes +1,
    like: this.state.numberOfLikes ===0 ? "Like": "Likes"
  })
}

  render(){
  return (
    <div className="button">
      <button onClick={this.handleClick}>{this.state.numberOfLikes} {this.state.like}</button>
    </div>
  );
}
}
export default App;
