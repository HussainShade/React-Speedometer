// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState =>
      prevState.speed < 200
        ? {speed: prevState.speed + 10}
        : {speed: prevState.speed},
    )
  }

  onBrake = () => {
    this.setState(prevState =>
      prevState.speed > 0
        ? {speed: prevState.speed - 10}
        : {speed: prevState.speed},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed-text">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="accelerate-button"
            onClick={this.onAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button className="brake-button" onClick={this.onBrake} type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
