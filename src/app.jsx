import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import List from './toDoList.jsx'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: '',
      toDoList: [],
      toDos: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // handling input change
  handleChange(event) {
    this.setState({value: event.target.value})
  }

  // handling on submit event
  handleSubmit(event) {
    this.setState({
      toDoList: [...this.state.toDoList, this.state.value]
    })
    event.preventDefault();
  }

  handleDelete(index) {
    const newArr = [...this.state.tasks];
    newArr.splice(index, 1);
    this.setState({tasks: newArr});
  }


  render() {

    return (
     <div>
     <form onSubmit={this.handleSubmit}>
        <label>
          Submit a Todo:
          <br/>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <br></br>
      <h5>Your current list of todos:</h5>
      <br></br>
      <List list={this.state.toDoList} index={this.state.toDoList.length - 1} onDelete={this.handleDelete}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));