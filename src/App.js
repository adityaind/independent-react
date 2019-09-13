  import React, { useState } from 'react';
  import Person from './Person/Person';
  import './App.css';

  const App =props =>{
    const [personState, setPersonState] = useState({
      persons:[
      {name : 'adi', age:26},
      {name : 'pat', age:27}
      ]
    })

    //const[otherState, setOtherState] = useState('some other value');
    
    console.log(personState);

    const switchNameHandler = () => {
      setPersonState({
      persons:[
      {name : 'adity', age:29},
      {name : 'pat', age:30},

      ]
    })
    }
    
      return (
        <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This is working</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person
         name = {personState.persons[0].name}
        age = {personState.persons[0].age}/>
        <Person
         name={personState.persons[1].name}
         age = {personState.persons[1].age}/>
    
        </div>
        );
    }
  

  export default App;
