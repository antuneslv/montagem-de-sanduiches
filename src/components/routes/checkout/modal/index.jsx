import { Component } from 'react'
import './style.css'

class Modal extends Component {
  render() {
    return (
      <aside className='modal'>
        <h2 className='modal-title'></h2>
        <p className='modal-text'></p>
        <Button className='modal-button' />
      </aside>
    )
  }
}

export default Modal
