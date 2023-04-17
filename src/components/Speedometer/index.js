import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    this.setState(prevState =>
      prevState.speed >= 200
        ? {speed: prevState.speed}
        : {speed: prevState.speed + 10},
    )
  }

  applyBrake = () => {
    this.setState(prevState =>
      prevState.speed > 0
        ? {speed: prevState.speed - 10}
        : {speed: prevState.speed},
    )
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1 className="head">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="Speedometer"
        />
        <h1 className="heading">Speed is {speed}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="accel" type="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="break" type="button" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
