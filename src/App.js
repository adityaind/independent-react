  import React, { Component } from 'react';
  import Person from './Person/Person';
  import './App.css';

  class App extends Component {
    state= {
      persons:[
      {name : 'adi', age:26},
      {name : 'pat', age:27}
      ]
    }

    switchNameHandler = () => {
      this.setState({
      persons:[
      {name : 'adity', age:29},
      {name : 'pat', age:30},
     
      ]
    })
    }
    render() {
      return (
        <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age = {this.state.persons[1].age}/>
    
        </div>
        );
    }
  }

  export default App;
