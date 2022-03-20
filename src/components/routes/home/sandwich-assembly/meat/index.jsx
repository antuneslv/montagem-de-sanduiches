import { Component } from 'react'
import Button from '../../../../button'

class Meat extends Component {
  render() {
    const { selectedMeat, meat1, meat2, meat3, meat4 } = this.props

    return (
      <>
        <div className="assembly-group-title">
          <h2 className="assembly-title">Escolha sua carne</h2>
        </div>
        <Button
          id="meat1"
          className={meat1}
          onClick={selectedMeat}
        >
          Boi
        </Button>
        <Button
          id="meat2"
          className={meat2}
          onClick={selectedMeat}
        >
          Porco
        </Button>
        <Button
          id="meat3"
          className={meat3}
          onClick={selectedMeat}
        >
          Frango
        </Button>
        <Button
          id="meat4"
          className={meat4}
          onClick={selectedMeat}
        >
          Vegetariano
        </Button>
      </>
    )
  }
}

export default Meat
