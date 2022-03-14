import { Component } from 'react'
import './style.css'

class OrderSummary extends Component {
  render() {
    return (
      <div className="order-summary-wrapper">
        <h2 className="ty-title">Obrigado pela Preferência!</h2>
        <h2 className="order-summary-title">Resumo do Pedido:</h2>
      </div>
    )
  }
}

export default OrderSummary
