import { Component } from 'react'
import Button from '../../../button'
import { Link } from 'react-router-dom'
import './style.css'

class Preview extends Component {
  render() {
    const {total} = this.props
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
        <Button className="cta-button" onClick={this.props.next}>
          Prosseguir
        </Button>
      )
    }
    const { sandwichItems } = this.props
    return (
      <div className="preview-wrapper">
        <h2 className="preview-title">Ingredientes Selecionados:</h2>
        <ul className="preview-list">
          {sandwichItems.map(item => (
            <li key={item.id}>
              {item.type}: {item.item}
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
