import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  render () {
    return (
      <div className="main">
        <h3>Hello World</h3>
        <Person name="汪渊1号" age="18" />
        <Person name="汪渊2号" age="20" />
        <Person name="汪渊3号" age="22" />
      </div>
    )
  }
}

export default App;
