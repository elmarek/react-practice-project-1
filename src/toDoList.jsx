import React, { Component } from 'react'

const List = (props) => {
  if(props.list.length > 0) {
    return (
      props.list.map(item => {
        return <li>{item}</li>
      })
    )
  } else {
    return (<div></div>)
  }
}

export default List