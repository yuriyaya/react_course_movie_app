import React from "react";

class App extends React.Component{
  state = {
    count: 0
  };
  up = () => {
    this.setState(current => ({count: current.count + 1}))
  };
  down = () => {
    this.setState(current => ({count: current.count - 1}))
  };
  componentDidMount(){
    console.log("component did mount")
  }
  componentDidUpdate(){
    console.log("component did update")
  }
  render() {
    return <div>
      <h1>The number is: {this.state.count}</h1>
      <button onClick={this.up}>Up</button>
      <button onClick={this.down}>Down</button>
    </div>
  };
}

export default App;
