import { Component } from 'react'
import Button from '../../../button'
import PropTypes from 'prop-types'
import './style.css'

class Modal extends Component {
  render() {
   const { modalTitle, modalText, buttonText, closeModal } = this.props
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <h2 className="modal-title">{modalTitle}</h2>
          <p className="modal-text">{modalText}</p>
          <Button className="modal-button" onClick={closeModal}>
            {buttonText}
          </Button>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  modalTitle: PropTypes.string,
  modalText: PropTypes.string,
  buttonText: PropTypes.string,
  closeModal: PropTypes.func
}

export default Modal
