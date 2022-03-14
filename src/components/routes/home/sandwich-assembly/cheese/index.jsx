import { Component } from 'react'
import Button from '../../../../button'

class Cheese extends Component {
  render() {
    return (
      <>
        <div className="assembly-group-title">
          <h2 className="assembly-title">Escolha seu queijo</h2>
        </div>
        <Button className="assembly-button">Molho Gorgonzola</Button>
        <Button className="assembly-button">Prato</Button>
        <Button className="assembly-button">Chedar</Button>
        <Button className="assembly-button">Sem queijo</Button>
      </>
    )
  }
}

export default Cheese
