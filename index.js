// Write your code here
// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  // let evenOrOdd = 0

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 101),
    }))
  }

  renderEvenOrOdd = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return <p className="para-1">Count is Even</p>
    }
    return <p className="para-1">Count is Odd</p>
  }

  render() {
    const {count} = this.state
    /*
    let evenOrOdd = null
    if (count % 2 === 0) {
      evenOrOdd = 'Even'
    } else {
      evenOrOdd = 'Odd'
    }
    */
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          {this.renderEvenOrOdd()}
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
