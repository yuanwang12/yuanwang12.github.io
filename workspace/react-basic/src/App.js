import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {

  // state
  state = {
    persons: [
      { name: "汪渊1号", age: "18" },
      { name: "汪渊2号", age: "20" },
      { name: "汪渊3号", age: "22" }
    ],
    personState: false
  }

  // changePerson
  changePerson = () => {
    this.setState({
      persons: [
        { name: "汪渊001号", age: "23" },
        { name: "汪渊002号", age: "23" },
        { name: "汪渊003号", age: "33" }
      ]
    })
  }

  // changeVal
  changeVal = event => {
    let newName = event.target.value;
    this.setState({
      persons: [
        { name: newName, age: "23" },
        { name: newName, age: "23" },
        { name: newName, age: "33" }
      ]
    })
  }
  style = {
    border: '1px solid #22222',
    backgroundColor: 'gray'
  }

  // toggleState
  toggleState = () => {
    let personState = this.state.personState;
    this.setState({
      personState: !personState
    });
  }

  render () {

    let person = null;
    if (this.state.personState) {
      person = (
        this.state.persons.map(personObj => {
          return <Person name={personObj.name} age={personObj.age} />
        })
      )
    }

    return (
      <div className="main">
        <h3>Hello World</h3>
        <button onClick={this.toggleState}>切换状态</button>
        {person}


      </div>
    )
  }
}

export default App;
