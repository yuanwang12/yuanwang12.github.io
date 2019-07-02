import React from 'react';
import './App.css';
import Header from '../components/Header/Header'
import Persons from '../components/Persons/Persons';


class App extends React.Component {
  // state
  state = {
    persons: [
      { name: "汪渊1号", age: "18", id: "1" },
      { name: "汪渊2号", age: "20", id: "2" },
      { name: "汪渊3号", age: "22", id: "3" }
    ],
    personState: true
  }

  // changeVal
  changeVal = (event, id) => {
    let newName = event.target.value;
    let personIndex = this.state.persons.findIndex(item => {
      return item.id === id
    })
    let personsArr = [...this.state.persons];
    personsArr[personIndex].name = newName;
    this.setState({
      persons: personsArr
    })
  }

  // 切换状态
  toggleState = () => {
    let personState = this.state.personState;
    this.setState({
      personState: !personState
    });
  }

  // 删除当前数据
  deletePerson = (id) => {
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
    let style = {
      border: '1px solid #22222',
      backgroundColor: 'green',
      color: '#fff'
    }

    let classes = [];
    let personLength = this.state.persons.length;
    if (personLength === 2) {
      classes.push("red");
    }
    if (personLength === 1) {
      classes.push("red");
      classes.push("blod");
    }
    if (personLength === 3) {
      classes = [];
    }
    // 渲染dom
    return (
      <div className="main">
        <Header
          classes={classes.join(" ")}
          headerStyle={style}
          toggleState={this.toggleState} />
        <Persons
          deletePerson={this.deletePerson}
          changeVal={this.changeVal}
          state={this.state} />
      </div>
    )
  }
}

export default App;
