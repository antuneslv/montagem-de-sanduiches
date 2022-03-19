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
          status: 'neutral',
          isDirty: false,
          errors: []
        },
        cardNumber: {
          status: 'neutral',
          isDirty: false,
          errors: []
        },
        expirationDate: {
          status: 'neutral',
          isDirty: false,
          errors: []
        },
        cvv: {
          status: 'neutral',
          isDirty: false,
          errors: []
        },
        cpf: {
          status: 'neutral',
          isDirty: false,
          errors: []
        }
      }
    }

    this.dirtyComponent = this.dirtyComponent.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeCardNumber = this.changeCardNumber.bind(this)
    this.changeExpirationDate = this.changeExpirationDate.bind(this)
    this.changeCvv = this.changeCvv.bind(this)
    this.changeCpf = this.changeCpf.bind(this)
  }

  changeName($event) {
    const errors = nameValidator($event.target.value)

    this.setState({
      name: $event.target.value,
      validations: {
        ...this.state.validations,
        name: {
          ...this.state.validations.name,
          errors
        }
      }
    })
  }

  changeCardNumber($event) {
    const errors = cardNumberValidator($event.target.value)

    this.setState({
      cardNumber: $event.target.value,
      validations: {
        ...this.state.validations,
        cardNumber: {
          ...this.state.validations.cardNumber,
          errors
        }
      }
    })
  }

  changeExpirationDate($event) {
    const errors = expirationDateValidator($event.target.value)

    this.setState({
      expirationDate: $event.target.value,
      validations: {
        ...this.state.validations,
        expirationDate: {
          ...this.state.validations.expirationDate,
          errors
        }
      }
    })
  }

  changeCvv($event) {
    const errors = cvvValidator($event.target.value)

    this.setState({
      cvv: $event.target.value,
      validations: {
        ...this.state.validations,
        cvv: {
          ...this.state.validations.cvv,
          errors
        }
      }
    })
  }

  changeCpf($event) {
    const errors = cpfValidator($event.target.value)

    this.setState({
      cpf: $event.target.value,
      validations: {
        ...this.state.validations,
        cpf: {
          ...this.state.validations.cpf,
          errors
        }
      }
    })
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

    validations[$event.target.id].isDirty = true
    validations[id].errors = errors
    this.setState({ validations })
  }

  componentDidUpdate(prevProp, prevState) {
    // console.log(this.state.name)
    // console.log(this.state.cardNumber)
    // console.log(this.state.expirationDate)
    // console.log(this.state.cvv)
    // console.log(this.state.cpf)
    console.log(this.state.validations.name.status)
    console.log(this.state.validations.name.errors)
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
              onChange={this.changeName}
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
              onChange={this.changeCardNumber}
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
                onChange={this.changeExpirationDate}
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
                onChange={this.changeCvv}
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
              onChange={this.changeCpf}
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