import { Component } from 'react'
import Button from '../../../../button'
import PropTypes from 'prop-types'

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

Bread.propTypes = {
  selectedBread: PropTypes.func,
  bread1: PropTypes.string,
  bread2: PropTypes.string,
  bread3: PropTypes.string,
  bread4: PropTypes.string
}

export default Bread
