import { Component } from 'react'
import Button from '../../../../button'

class Bread extends Component {
  render() {
    return (
      <>
        <div className="assembly-group-title">
          <h2 className="assembly-title">Escolha o seu pão</h2>
        </div>
        <Button
          id="bread1"
          className="assembly-button"
          onClick={this.props.selectedBread}
        >
          Brioche
        </Button>
        <Button
          id="bread2"
          className="assembly-button"
          onClick={this.props.selectedBread}
        >
          Australiano
        </Button>
        <Button
          id="bread3"
          className="assembly-button"
          onClick={this.props.selectedBread}
        >
          Gergelim
        </Button>
        <Button
          id="bread4"
          className="assembly-button"
          onClick={this.props.selectedBread}
        >
          Sal
        </Button>
      </>
    )
  }
}

export default Bread
