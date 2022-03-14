import { Component } from 'react'
import Button from '../../../../button'

class Meat extends Component {
  render() {
    return (
      <>
        <div className="assembly-group-title">
          <h2 className="assembly-title">Escolha sua carne</h2>
        </div>
        <Button className="assembly-button">Boi</Button>
        <Button className="assembly-button">Porco</Button>
        <Button className="assembly-button">Frango</Button>
        <Button className="assembly-button">Vegetariano</Button>
      </>
    )
  }
}

export default Meat
