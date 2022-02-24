import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {count: 0};
  }
  
  handleClick() {
    this.setState({count: this.state.count + 1});
  }
  
  resetButton() {
    this.setState({count: 0});
  }
  
  render() {
    return(
      <div class="main">
        <p>{this.state.count}</p>
        <Button onClick={()=>{this.handleClick()}}>+</Button>
        <Button onClick={()=>{this.resetButton()}}>Reset</Button>
      </div>
      )
  }
}

export default App;