import React, { Component } from 'react'



// let handleDelete = (index) => {
//   const newArr = [...this.state.tasks];
//   newArr.splice(index, 1);
//   this.setState({tasks: newArr});
// }

//pass index to returned LI so it can be referenced for deletion
const List = (props) => {
  if(props.list.length > 0) {
    return (
      props.list.map(item => {
         console.log(props.index)
         return <li key='{index}'>{item}<button>{'X'}</button></li>
      })
    )
  } else {
    return (<div></div>)
  }
}

export default List