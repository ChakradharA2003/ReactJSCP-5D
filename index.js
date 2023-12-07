// Write your code here
import {Component} from 'react'
import './index.css'

const math = require('mathjs')

class EvenOddApp extends Component {
  state = {count: 0}

  // let evenOrOdd = 0

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + math.floor(math.random() * 101),
    }))
  }

  render() {
    const {count} = this.state
    let evenOrOdd = null
    if (count % 2 === 0) {
      evenOrOdd = 'Even'
    } else {
      evenOrOdd = 'Odd'
    }
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="para-1">Count is {evenOrOdd}</p>
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para-2">*increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
