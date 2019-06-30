import React from 'react'
import './Person.css'

const Person = props => {
  const style = {
    color: 'red'
  }
  return (
    <div className="personWrapp">
      <h3>我的名字是：<span style={style}>{props.name}</span> ，我的年龄是<span style={style}>{props.age}</span></h3>
    </div>
  )
}

export default Person;