import { Component } from 'react'
import Button from '../../../../button'

class Complement extends Component {
  render() {
    const { selectedComplement } = this.props

    return (
      <>
        <div>
          <h2 className="assembly-title">Escolha seus complementos</h2>
          <h2 className="assembly-title">Mais de uma opção selecionável</h2>
        </div>
        <Button
          id="complement1"
          className="assembly-button"
          onClick={selectedComplement}
        >
          Bacon
        </Button>
        <Button
          id="complement2"
          className="assembly-button"
          onClick={selectedComplement}
        >
          Cebola Caramelizada
        </Button>
        <Button
          id="complement3"
          className="assembly-button"
          onClick={selectedComplement}
        >
          Molho Especial
        </Button>
        <Button
          id="complement4"
          className="assembly-button"
          onClick={selectedComplement}
        >
          Pimenta Jalapeño
        </Button>
      </>
    )
  }
}

export default Complement
