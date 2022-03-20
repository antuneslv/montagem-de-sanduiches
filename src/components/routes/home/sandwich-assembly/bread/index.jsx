import { Component } from 'react'
import Button from '../../../../button'

class Bread extends Component {
  render() {
    const { selectedBread, bread1, bread2, bread3, bread4 } = this.props

    return (
      <>
        <div className="assembly-group-title">
          <h2 className="assembly-title">Escolha o seu pão</h2>
        </div>
        <Button
          id="bread1"
          className={bread1}
          onClick={selectedBread}
        >
          Brioche
        </Button>
        <Button
          id="bread2"
          className={bread2}
          onClick={selectedBread}
        >
          Australiano
        </Button>
        <Button
          id="bread3"
          className={bread3}
          onClick={selectedBread}
        >
          Gergelim
        </Button>
        <Button
          id="bread4"
          className={bread4}
          onClick={selectedBread}
        >
          Sal
        </Button>
      </>
    )
  }
}

export default Bread
