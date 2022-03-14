import { Component } from 'react'
import './style.css'

class Button extends Component {
  render() {
    return (
      <button
        {...this.props}
        className={`${this.props.className} button`}
      ></button>
    )
  }
}

export default Button
