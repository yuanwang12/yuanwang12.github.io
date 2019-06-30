import React from 'react';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  render () {
    return (
      <div className="main">
        <h3>Hello World</h3>
        <Person />
      </div>
    )
  }
}

export default App;
