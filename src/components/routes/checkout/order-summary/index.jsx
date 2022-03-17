import { Component } from 'react'
import './style.css'

class OrderSummary extends Component {
  render() {
    const { singleItems, saladItems, complementItems, total } = this.props
    const formatedCurrency = total.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
    })

    function formatedStringList(array, type){
      const list = []
      let lastWord = ''
      array.length > 1
        ? (lastWord =
            ' e ' + array[array.length - 1].item.toLowerCase())
        : (lastWord = '')
  
  
      for (let i = 0; i < array.length; i++) {
        i == 0 && list.push(array[i].item)
        if (i > 0 && i < array.length - 1) {
          list.push(array[i].item.toLowerCase())
        }
      }
  
      let finalString
  
      array.length != 0
        ? (finalString = list.join(', ') + lastWord)
        : (finalString = `Sem ${type}`) 

        return finalString
    }

      return (
        <>
          <h2 className="ty-title">Obrigado pela Preferência!</h2>
          <div className="order-summary-wrapper">
            <h2 className="order-summary-title">Resumo do Pedido:</h2>
            <ul>
              {singleItems.map(item => (
                <li className="order-summary" key={item.id}>
                  {item.type}: {item.item}
                </li>
              ))}
              <li className="order-summary-group">
                {<p>Saladas: {formatedStringList(saladItems, 'salada')}</p>}
              </li>
              <li className="order-summary-group">
                {<p>Complementos: {formatedStringList(complementItems, 'complemento')}</p>}
              </li>
            </ul>
            <p className="order-summary">Total: {formatedCurrency}</p>
          </div>
        </>
      )
  }
}

export default OrderSummary
