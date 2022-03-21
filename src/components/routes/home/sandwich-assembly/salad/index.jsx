import { Component } from 'react'
import Button from '../../../../button'
import PropTypes from 'prop-types'

class Salad extends Component {
  render() {
    const { selectedSalad } = this.props
    
    return (
      <>
        <div>
          <h2 className="assembly-title">Escolha suas saladas</h2>
          <h2 className="assembly-title">Mais de uma opção selecionável</h2>
        </div>
        <Button
          id="salad1"
          className="assembly-button"
          onClick={selectedSalad}
        >
          Alface
        </Button>
        <Button
          id="salad2"
          className="assembly-button"
          onClick={selectedSalad}
        >
          Tomate
        </Button>
        <Button
          id="salad3"
          className="assembly-button"
          onClick={selectedSalad}
        >
          Cebola
        </Button>
        <Button
          id="salad4"
          className="assembly-button"
          onClick={selectedSalad}
        >
          Picles
        </Button>
      </>
    )
  }
}

Salad.propTypes = {
  selectedSalad: PropTypes.func
}

export default Salad
