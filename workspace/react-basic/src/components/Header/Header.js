import React from 'react';

const Header = props => {
  let classes = [];
  let personLength = props.state.persons.length;
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
  return (
    <div>
      <h3 className={classes.join(" ")}>Hello World</h3>
      <button style={props.headerStyle} onClick={props.toggleState}>切换状态</button>
    </div>
  )
}

export default Header;