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
        <Button
          id="salad1"
          className="assembly-button"
          onClick={this.props.selectedSalad}
        >
          Alface
        </Button>
        <Button
          id="salad2"
          className="assembly-button"
          onClick={this.props.selectedSalad}
        >
          Tomate
        </Button>
        <Button
          id="salad3"
          className="assembly-button"
          onClick={this.props.selectedSalad}
        >
          Cebola
        </Button>
        <Button
          id="salad4"
          className="assembly-button"
          onClick={this.props.selectedSalad}
        >
          Picles
        </Button>
      </>
    )
  }
}

export default Salad
