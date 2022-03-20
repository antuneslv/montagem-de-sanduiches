import { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Main extends Component {
  render() {
    return (
      <main className='main'> { this.props.children } </main>
    )
  }
}

Main.propTypes = {
  children: PropTypes.array
}

export default Main
