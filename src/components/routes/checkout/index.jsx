import { Component } from 'react'
import Header from '../../header'
import Main from '../../main'
import img from '../../img/image-sandwich.png'
import OrderSummary from './order-summary'
import PaymentDetails from './payment-details'
import './style.css'

class Checkout extends Component {
  render() {
    const { singleItems, saladItems, complementItems, total } = this.props

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
          <PaymentDetails />
        </Main>
      </>
    )
  }
}

export default Checkout
