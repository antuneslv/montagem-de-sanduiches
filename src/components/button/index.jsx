import { Component } from 'react'
import PropTypes from 'prop-types'
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

Button.propTypes = {
  className: PropTypes.string
}

export default Button
