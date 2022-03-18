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
      validations: {
        name: {
          isDirty: false,
          errors: []
        },
        cardNumber: {
          isDirty: false,
          errors: []
        },
        expirationDate: {
          isDirty: false,
          errors: []
        },
        cvv: {
          isDirty: false,
          errors: []
        },
        cpf: {
          isDirty: false,
          errors: []
        }
      }
    }

    this.dirtyComponent = this.dirtyComponent.bind(this)
  }

  dirtyComponent($event){
    const {validations} = this.state
    const {id, value} = $event.target
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

    validations[$event.target.id].isDirty = true
    validations[id].errors = errors
    this.setState({ validations })
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
              placeholder="Seu Nome Completo"
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
              placeholder="Somente números"
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
                placeholder="Somente números"
                className="expiration-date-input"
                onBlur={this.dirtyComponent}
              />
            </label>
            <label className="label" htmlFor="cvv">
              CVV:
              <Input
                type="text"
                name="cvv"
                id="cvv"
                placeholder="3 dígitos"
                className="cvv-input"
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
              placeholder="Somente números"
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