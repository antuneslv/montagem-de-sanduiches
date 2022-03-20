import { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Header extends Component {
  render () {
    return (
      <header className='header'>
        <h1>{ this.props.title }</h1>
      </header>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
