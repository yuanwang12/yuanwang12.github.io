import React from 'react';

const Header = props => {
  return (
    <div>
      <h3 className={props.classer}>Hello World</h3>
      <button style={props.headerStyle} onClick={props.toggleState}>切换状态</button>
    </div>
  )
}

export default Header;