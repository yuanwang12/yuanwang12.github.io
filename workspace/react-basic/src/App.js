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
    status: false
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

  render () {
    return (
      <div className="main">
        <h3>Hello World</h3>
        <Person myclick={this.changePerson} name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person myclick={this.changePerson} name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person myclick={this.changePerson} name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;
