import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

class Home extends Component {
  state = {
    sign: '+',
    firstNumber: 0,
    secondNumber: 0,
    result: '',
  }

  FirstInput = event => {
    const inputValue = event.target.value
    this.setState({firstNumber: inputValue})
  }

  SecondInput = event => {
    const inputValue = event.target.value
    this.setState({secondNumber: inputValue})
  }

  plusButton = () => {
    this.setState({sign: '+'})
  }

  subButton = () => {
    this.setState({sign: '-'})
  }

  mulButton = () => {
    this.setState({sign: '*'})
  }

  divButton = () => {
    this.setState({sign: '/'})
  }

  result = () => {
    const {firstNumber, secondNumber, sign} = this.state
    const IntFirstNumber = parseInt(firstNumber)
    const IntSecondNumber = parseInt(secondNumber)
    if (sign === '+') {
      this.setState({result: IntFirstNumber + IntSecondNumber})
    }
    if (sign === '-') {
      this.setState({result: IntFirstNumber - IntSecondNumber})
    }
    if (sign === '*') {
      this.setState({result: IntFirstNumber * IntSecondNumber})
    }
    if (sign === '/') {
      this.setState({result: IntFirstNumber / IntSecondNumber})
    }
  }

  reset = () => {
    this.setState({
      sign: '+',
      firstNumber: '',
      secondNumber: '',
      result: '',
    })
  }

  render() {
    const {result, sign} = this.state

    return (
      <div className="main-container">
        <div className="cal-container">
          <h1 className="heading">My Calculator</h1>
          <div className="input-container">
            <input
              type="number"
              className="input-items"
              placeholder="Enter First Number"
              onChange={this.FirstInput}
            />
            <p className="main-sign">{sign}</p>
            <input
              type="number"
              className="input-items"
              placeholder="Enter Second Number"
              onChange={this.SecondInput}
            />
          </div>
          <div className="sign-container">
            <button className="sign" type="button" onClick={this.plusButton}>
              +
            </button>
            <button className="sign" type="button" onClick={this.subButton}>
              -
            </button>
            <button className="sign" type="button" onClick={this.mulButton}>
              *
            </button>
            <button className="sign" type="button" onClick={this.divButton}>
              /
            </button>
          </div>
          <div className="button-container">
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.result}
            >
              Calculate
            </button>
            <button type="button" className="btn btn-info" onClick={this.reset}>
              Reset
            </button>
          </div>
          <div>
            <p className="result">Result : {result}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
