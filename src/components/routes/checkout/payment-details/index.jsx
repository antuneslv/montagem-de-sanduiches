import { Component } from 'react'
import Button from '../../../button'
import Input from './input'
import './style.css'

class PaymentDetails extends Component {
  render() {
    return (
      <div className="payment-datails-wrapper">
        <h2 className="payment-datails-title">Insira os dados do pagamento:</h2>
        <form>
          <label className="label" htmlFor="name">
            Nome:
            <Input id="name" placeholder="Seu Nome Completo" />
          </label>
          <label className="label" htmlFor="card-number">
            Número do Cartão:
            <Input id="card-number" placeholder="Somente números" />
          </label>
          <div className="form-group">
            <label className="label" htmlFor="expiration-date">
              Data de Vencimento:
              <Input
                id="expiration-date"
                placeholder="Somente números"
                className="expiration-date-input"
              />
            </label>
            <label className="label" htmlFor="cvv">
              CVV:
              <Input id="cvv" placeholder="3 dígitos" className="cvv-input" />
            </label>
          </div>
          <label className="label" htmlFor="cpf">
            CPF:
            <Input id="cpf" placeholder="Somente números" />
          </label>
        </form>
        <Button className="cta-button">Pagar</Button>
      </div>
    )
  }
}

export default PaymentDetails