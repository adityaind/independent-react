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

    switchNameHandler = (newName) => {
      this.setState({
      persons:[
      {name : newName, age:29},
      {name : 'pat', age:30}

      ]
    })
    }
    nameChangeHandler =(event)=>{
       this.setState({
      persons:[
      {name : 'adi', age:26},
      {name : event.target.value, age:30}

      ]
    })
    }
    name
    render() {
      return (
        <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is working</p>
        <button onClick={()=>this.switchNameHandler('aditya' )}>Switch Name</button>
        <Person
         name = {this.state.persons[0].name}
         age = {this.state.persons[0].age}
         />
        <Person
         name={this.state.persons[1].name}
         age = {this.state.persons[1].age}
         click={this.switchNameHandler.bind(this,'adi!!' )}
         changed={this.nameChangeHandler}/>
        </div>
        );
    }
  }

  export default App;
