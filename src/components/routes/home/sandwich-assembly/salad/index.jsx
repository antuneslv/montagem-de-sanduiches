import { Component } from 'react'
import Button from '../../../../button'

class Salad extends Component {
  render() {
    return (
      <>
        <div>
          <h2 className="assembly-title">Escolha suas saladas</h2>
          <h2 className="assembly-title">Mais de uma opção selecionável</h2>
        </div>
        <Button className="assembly-button">Alface</Button>
        <Button className="assembly-button">Tomate</Button>
        <Button className="assembly-button">Cebola</Button>
        <Button className="assembly-button">Picles</Button>
      </>
    )
  }
}

export default Salad
