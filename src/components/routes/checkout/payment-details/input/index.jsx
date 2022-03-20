import { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Input extends Component {
  render() {
    return (
      <input 
      {...this.props} 
      className={ `${this.props.className} input` } 
      type="text" />
    )
  }
}

Input.propTypes = {
  className: PropTypes.string
}

export default Input
