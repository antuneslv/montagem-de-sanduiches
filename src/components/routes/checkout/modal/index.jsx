import { Component } from 'react'
import Button from '../../../button'
import './style.css'

class Modal extends Component {
  render() {
   const {modalTitle, modalText, buttonText} = this.props
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <h2 className="modal-title">{modalTitle}</h2>
          <p className="modal-text">{modalText}</p>
          <Button className="modal-button" onClick={this.props.closeModal}>{buttonText}</Button>
        </div>
      </div>
    )
  }
}

export default Modal
