import { Component } from 'react'
import Button from '../../../button'
import { Link } from 'react-router-dom'
import './style.css'

class Preview extends Component {
  render() {
    const { total, singleItems, saladItems, complementItems } = this.props
    let formatedCurrency = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    let step

    if (this.props.sandwichStep == 'stepComplement') {
      step = (
        <Button className="cta-button">
          <Link className="link" to="/pagamento">
            Prosseguir
          </Link>
        </Button>
      )
    } else {
      step = (
        <Button className="cta-button" disabled={this.props.disabled} onClick={this.props.next}>
          Prosseguir
        </Button>
      )
    }
        
    return (
      <div className="preview-wrapper">
        <h2 className="preview-title">Ingredientes Selecionados:</h2>
        <ul className="preview-list">
          {singleItems.map(item => (
            <li className="preview-single-items" key={item.id}>
              {item.type}: {item.item}
            </li>
          ))}
          {saladItems.length > 0 && <p>Saladas: </p>}
          {saladItems.map(item => (
            <li className="preview-items" key={item.id}>
              {item.item}
            </li>
          ))}
          {complementItems.length > 0 && <p>Complementos: </p>}
          {complementItems.map(item => (
            <li className="preview-items" key={item.id}>
              {item.item}
            </li>
          ))}
        </ul>
        {total > 0 && <p className="price">Total: {formatedCurrency}</p>}
        {step}
      </div>
    )
  }
}

export default Preview
