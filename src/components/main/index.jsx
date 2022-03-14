import { Component } from 'react'
import './style.css'

class Main extends Component {
  render() {
    return (
      <main className='main'> { this.props.children } </main>
    )
  }
}

export default Main
