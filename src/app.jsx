import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import List from './toDoList.jsx'

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      toDoList: [],
      toDos: false,
    }
   // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

// handling input change
  handleChange(event) {
    this.setState({toDoList: event.target.value})
  }

  // handling on submit event
  handleSubmit(event) {
    this.setState({
      toDoList: [...this.state.toDoList, event.target.value]
    })
    event.preventDefault();
  }


  render() {

    return (
     <div>
     <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <List list={this.state.toDoList} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));