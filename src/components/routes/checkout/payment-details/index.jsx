import { Component } from 'react'
import Button from '../../../button'
import Input from './input'
import {
  nameValidator,
  cardNumberValidator,
  expirationDateValidator,
  cvvValidator,
  cpfValidator
} from './validators'
import './style.css'

class PaymentDetails extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
      cpf: '',
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
        },
        isValid: false
      }
    }

    this.dirtyComponent = this.dirtyComponent.bind(this)
    this.changeFormValue = this.changeFormValue.bind(this)
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

    if (
      validations.name.class == 'valid-input'
      && validations.cardNumber.class == 'valid-input'
      && validations.expirationDate.class == 'valid-input'
      && validations.cvv.class == 'valid-input'
      && validations.cpf.class == 'valid-input'
    ) {
      this.setState({
        validations: {
          ...validations,
          isValid: true
        }
      })
    } else {
      this.setState({
        validations: {
          ...validations,
          isValid: false
        }
      })
    }
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

  componentDidUpdate(prevProp, prevState) {
  }

  render() {
    const { validations } = this.state

    return (
      <div className="payment-datails-wrapper">
        <h2 className="payment-datails-title">Insira os dados do pagamento:</h2>
        <form>
          <label className="label" htmlFor="name">
            Nome:
            <Input
              type="text"
              name="name"
              id="name"
              className={validations.name.class}
              placeholder="Seu Nome Completo"
              onChange={this.changeFormValue}
              onBlur={this.dirtyComponent}
            />
          </label>
          {validations.name.isDirty &&
            validations.name.errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          <label className="label" htmlFor="cardNumber">
            Número do Cartão:
            <Input
              type="text"
              name="cardNumber"
              id="cardNumber"
              className={validations.cardNumber.class}
              placeholder="Somente números"
              onChange={this.changeFormValue}
              onBlur={this.dirtyComponent}
            />
          </label>
          {validations.cardNumber.isDirty &&
            validations.cardNumber.errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          <div className="form-group">
            <label className="label" htmlFor="expirationDate">
              Data de Vencimento:
              <Input
                type="text"
                name="expirationDate"
                id="expirationDate"
                className={`expiration-date-input ${validations.expirationDate.class}`}
                placeholder="Somente números"
                onChange={this.changeFormValue}
                onBlur={this.dirtyComponent}
              />
            </label>
            <label className="label" htmlFor="cvv">
              CVV:
              <Input
                type="text"
                name="cvv"
                id="cvv"
                className={`cvv-input ${validations.cvv.class}`}
                placeholder="3 dígitos"
                onChange={this.changeFormValue}
                onBlur={this.dirtyComponent}
              />
            </label>
          </div>
          {validations.expirationDate.isDirty &&
            validations.expirationDate.errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          {validations.cvv.isDirty &&
            validations.cvv.errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          <label className="label" htmlFor="cpf">
            CPF:
            <Input
              type="text"
              name="cpf"
              id="cpf"
              className={validations.cpf.class}
              placeholder="Somente números"
              onChange={this.changeFormValue}
              onBlur={this.dirtyComponent}
            />
          </label>
          {validations.cpf.isDirty &&
            validations.cpf.errors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
        </form>
        <Button className="cta-button">Pagar</Button>
      </div>
    )
  }
}

export default PaymentDetails