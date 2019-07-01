import React from 'react';
import './App.css';
import Person from './Person/Person';

class App extends React.Component {

  // state
  state = {
    persons: [
      { name: "汪渊1号", age: "18", id: "1" },
      { name: "汪渊2号", age: "20", id: "2" },
      { name: "汪渊3号", age: "22", id: "3" }
    ],
    personState: false
  }

  // changePerson
  changePerson = () => {
    this.setState({
      persons: [
        { name: "汪渊001号", age: "23", id: "1" },
        { name: "汪渊002号", age: "23", id: "2" },
        { name: "汪渊003号", age: "33", id: "3" }
      ]
    })
  }

  // changeVal
  changeVal = event => {
    let newName = event.target.value;
    this.setState({
      persons: [
        { name: newName, age: "23", id: "1" },
        { name: newName, age: "23", id: "2" },
        { name: newName, age: "33", id: "3" }
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

  // deletePerson
  deletePerson = (event, id) => {
    // 通过id查找当前id所在对象
    let personIndex = this.state.persons.findIndex(obj => {
      return obj.id === id;
    })
    let persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  render () {
    // 加载dom
    let person = null;
    if (this.state.personState) {
      let persons = [...this.state.persons]
      person = (
        persons.map(personObj => {
          console.log(personObj)
          return <Person
            key={personObj.age}
            deleteThisObj={event => this.deletePerson(event, personObj.id)}
            name={personObj.name}
            age={personObj.age} />
        })
      )
    }

    // 渲染dom
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
