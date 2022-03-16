import { Component } from 'react'
import Button from '../../../../button'

class Cheese extends Component {
  render() {
    return (
      <>
        <div className="assembly-group-title">
          <h2 className="assembly-title">Escolha seu queijo</h2>
        </div>
        <Button
          id="cheese1"
          className={this.props.cheese1}
          onClick={this.props.selectedCheese}
        >
          Molho Gorgonzola
        </Button>
        <Button
          id="cheese2"
          className={this.props.cheese2}
          onClick={this.props.selectedCheese}
        >
          Prato
        </Button>
        <Button
          id="cheese3"
          className={this.props.cheese3}
          onClick={this.props.selectedCheese}
        >
          Chedar
        </Button>
        <Button
          id="cheese4"
          className={this.props.cheese4}
          onClick={this.props.selectedCheese}
        >
          Sem queijo
        </Button>
      </>
    )
  }
}

export default Cheese
