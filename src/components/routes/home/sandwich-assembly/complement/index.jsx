import { Component } from 'react'
import Button from '../../../../button'

class Complement extends Component {
  render() {
    return (
      <>
        <div>
          <h2 className="assembly-title">Escolha seus complementos</h2>
          <h2 className="assembly-title">Mais de uma opção selecionável</h2>
        </div>
        <Button className="assembly-button">Bacon</Button>
        <Button className="assembly-button">Cebola Caramelizada</Button>
        <Button className="assembly-button">Molho Especial</Button>
        <Button className="assembly-button">Pimenta Jalapeño</Button>
      </>
    )
  }
}

export default Complement
