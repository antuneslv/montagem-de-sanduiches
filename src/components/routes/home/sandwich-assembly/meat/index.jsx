import { Component } from 'react'
import Button from '../../../../button'

class Meat extends Component {
  render() {
    return (
      <>
        <div className="assembly-group-title">
          <h2 className="assembly-title">Escolha sua carne</h2>
        </div>
        <Button
          id="meat1"
          className={this.props.meat1}
          onClick={this.props.selectedMeat}
        >
          Boi
        </Button>
        <Button
          id="meat2"
          className={this.props.meat2}
          onClick={this.props.selectedMeat}
        >
          Porco
        </Button>
        <Button
          id="meat3"
          className={this.props.meat3}
          onClick={this.props.selectedMeat}
        >
          Frango
        </Button>
        <Button
          id="meat4"
          className={this.props.meat4}
          onClick={this.props.selectedMeat}
        >
          Vegetariano
        </Button>
      </>
    )
  }
}

export default Meat
