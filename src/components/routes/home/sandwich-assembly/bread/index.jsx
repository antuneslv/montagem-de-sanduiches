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
          className={this.props.bread1}
          onClick={this.props.selectedBread}
        >
          Brioche
        </Button>
        <Button
          id="bread2"
          className={this.props.bread2}
          onClick={this.props.selectedBread}
        >
          Australiano
        </Button>
        <Button
          id="bread3"
          className={this.props.bread3}
          onClick={this.props.selectedBread}
        >
          Gergelim
        </Button>
        <Button
          id="bread4"
          className={this.props.bread4}
          onClick={this.props.selectedBread}
        >
          Sal
        </Button>
      </>
    )
  }
}

export default Bread
