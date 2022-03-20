import { Component } from 'react'
import Button from '../../../button'
import Input from './input'
import './style.css'

class PaymentDetails extends Component {
  render() {
    const {
      changeFormValue,
      dirtyComponent,
      nameClass,
      validationsNameIsDirty,
      validationsNameErrors,
      cardNumberClass,
      validationsCardNumberIsDirty,
      validationsCardNumberErrors,
      expirationDateClass,
      validationsExpirationDateIsDirty,
      validationsExpirationDateErrors,
      cvvClass,
      validationsCvvIsDirty,
      validationsCvvErrors,
      cpfClass,
      validationsCpfIsDirty,
      validationsCpfErrors,
      disabled
    } = this.props

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
              className={nameClass}
              placeholder="Seu Nome Completo"
              onChange={changeFormValue}
              onBlur={dirtyComponent}
            />
          </label>
          {validationsNameIsDirty &&
            validationsNameErrors.map((error, index) => (
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
              className={cardNumberClass}
              placeholder="Somente números"
              onChange={changeFormValue}
              onBlur={dirtyComponent}
            />
          </label>
          {validationsCardNumberIsDirty &&
            validationsCardNumberErrors.map((error, index) => (
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
                className={`expiration-date-input ${expirationDateClass}`}
                placeholder="Somente números"
                onChange={changeFormValue}
                onBlur={dirtyComponent}
              />
            </label>
            <label className="label" htmlFor="cvv">
              CVV:
              <Input
                type="text"
                name="cvv"
                id="cvv"
                className={`cvv-input ${cvvClass}`}
                placeholder="3 dígitos"
                onChange={changeFormValue}
                onBlur={dirtyComponent}
              />
            </label>
          </div>
          {validationsExpirationDateIsDirty &&
            validationsExpirationDateErrors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
          {validationsCvvIsDirty &&
            validationsCvvErrors.map((error, index) => (
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
              className={cpfClass}
              placeholder="Somente números"
              onChange={changeFormValue}
              onBlur={dirtyComponent}
            />
          </label>
          {validationsCpfIsDirty &&
            validationsCpfErrors.map((error, index) => (
              <p key={index} className="error-message">
                {error}
              </p>
            ))}
        </form>
        <Button
          className="cta-button"
          disabled={disabled}
          onClick={this.props.openModal}
        >
          Pagar
        </Button>
      </div>
    )
  }
}

export default PaymentDetails