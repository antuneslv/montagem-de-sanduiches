import { Component } from 'react'
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

export default Input
