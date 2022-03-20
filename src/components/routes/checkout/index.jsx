import { Component } from 'react'
import Header from '../../header'
import Main from '../../main'
import img from '../../img/image-sandwich.png'
import OrderSummary from './order-summary'
import PaymentDetails from './payment-details'
import Modal from './modal'
import {
  nameValidator,
  cardNumberValidator,
  expirationDateValidator,
  cvvValidator,
  cpfValidator
} from './validators'
import PropTypes from 'prop-types'
import './style.css'

class Checkout extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      cpf: '',
      isButtonDisabled: true,
      modalTitle: '',
      modalText: '',
      modalButtonText: '',
      isModalOpen: false,
      validations: {
        name: {
          isDirty: false,
          errors: [],
          class: ''
        },
        cardNumber: {
          isDirty: false,
          errors: [],
          class: ''
        },
        expirationDate: {
          isDirty: false,
          errors: [],
          class: ''
        },
        cvv: {
          isDirty: false,
          errors: [],
          class: ''
        },
        cpf: {
          isDirty: false,
          errors: [],
          class: ''
        }
      }
    }

    this.dirtyComponent = this.dirtyComponent.bind(this)
    this.changeFormValue = this.changeFormValue.bind(this)
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  changeFormValue($event) {
    const { id, value } = $event.target
    const { validations } = this.state
    let errors

    switch (id) {
      case 'name':
        errors = nameValidator(value)
        break
      case 'cardNumber':
        errors = cardNumberValidator(value)
        break
      case 'expirationDate':
        errors = expirationDateValidator(value)
        break
      case 'cvv':
        errors = cvvValidator(value)
        break
      case 'cpf':
        errors = cpfValidator(value)
        break
      default:
        errors = []
        break
    }

    errors.length > 0
      ? (validations[id].class = 'invalid-input')
      : (validations[id].class = 'valid-input')

    this.state[id] = value
    validations[id].errors = errors
    this.setState({ ...this.state })

    validations.name.class == 'valid-input' &&
    validations.cardNumber.class == 'valid-input' &&
    validations.expirationDate.class == 'valid-input' &&
    validations.cvv.class == 'valid-input' &&
    validations.cpf.class == 'valid-input'
      ? this.setState({ isButtonDisabled: false })
      : this.setState({ isButtonDisabled: true })
  }

  dirtyComponent($event) {
    const { validations } = this.state
    const { id, value } = $event.target
    let errors

    switch (id) {
      case 'name':
        errors = nameValidator(value)
        break

      case 'cardNumber':
        errors = cardNumberValidator(value)
        break

      case 'expirationDate':
        errors = expirationDateValidator(value)
        break

      case 'cvv':
        errors = cvvValidator(value)
        break

      case 'cpf':
        errors = cpfValidator(value)
        break

      default:
        errors = []
        break
    }

    errors.length > 0
      ? (validations[id].class = 'invalid-input')
      : (validations[id].class = 'valid-input')

    validations[$event.target.id].isDirty = true
    validations[id].errors = errors
    this.setState({ validations })
  }

  openModal() {
    this.setState({ isModalOpen: true })

    if (this.state.cardNumber == 111111111111) {
      this.setState({
        modalTitle: 'Pagamento Recusado',
        modalText:
          'Identificamos que você tentou inserir um número de cartão inválido para tentar nos enganar. Calote aqui não!',
        modalButtonText: 'Me Desculpe'
      })
    } else {
      this.setState({
        modalTitle: 'Pagamento Aprovado com Sucesso',
        modalText: `Muito obrigado pela compra, ${
          this.state.name
        }, ela foi computada no cartão de final ${this.state.cardNumber.slice(
          -3
        )}. Esperamos que tenha um excelente lanche e que possamos vos atender mais vezes!`,
        modalButtonText: 'Ok'
      })
    }
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    const { singleItems, saladItems, complementItems, total } = this.props
    const {
      validations,
      isButtonDisabled,
      isModalOpen,
      modalTitle,
      modalText,
      modalButtonText
    } = this.state

    return (
      <>
        <Header title="Pague Seu Sanduíche" />
        <Main>
          <div className="img-order-summary">
            <img className="img" src={img} alt="Imagem do Sanduíche" />
            <OrderSummary
              singleItems={singleItems}
              saladItems={saladItems}
              complementItems={complementItems}
              total={total}
            />
          </div>
          <PaymentDetails
            changeFormValue={this.changeFormValue}
            dirtyComponent={this.dirtyComponent}
            nameClass={validations.name.class}
            validationsNameIsDirty={validations.name.isDirty}
            validationsNameErrors={validations.name.errors}
            cardNumberClass={validations.cardNumber.class}
            validationsCardNumberIsDirty={validations.cardNumber.isDirty}
            validationsCardNumberErrors={validations.cardNumber.errors}
            expirationDateClass={validations.expirationDate.class}
            validationsExpirationDateIsDirty={
              validations.expirationDate.isDirty
            }
            validationsExpirationDateErrors={validations.expirationDate.errors}
            cvvClass={validations.cvv.class}
            validationsCvvIsDirty={validations.cvv.isDirty}
            validationsCvvErrors={validations.cvv.errors}
            cpfClass={validations.cpf.class}
            validationsCpfIsDirty={validations.cpf.isDirty}
            validationsCpfErrors={validations.cpf.errors}
            disabled={isButtonDisabled}
            openModal={this.openModal}
          />
        </Main>
        {isModalOpen && (
          <Modal
            modalTitle={modalTitle}
            modalText={modalText}
            buttonText={modalButtonText}
            closeModal={this.closeModal}
          />
        )}
      </>
    )
  }
}

Checkout.propTypes = {
  singleItems: PropTypes.array,
  saladItems: PropTypes.array,
  complementItems: PropTypes.array,
  total: PropTypes.number
}

export default Checkout
