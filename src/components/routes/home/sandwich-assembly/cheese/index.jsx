import { Component } from 'react'
import Button from '../../../../button'
import PropTypes from 'prop-types'

class Cheese extends Component {
  render() {
    const { selectedCheese, cheese1, cheese2, cheese3, cheese4 } = this.props

    return (
      <>
        <div className="assembly-group-title">
          <h2 className="assembly-title">Escolha seu queijo</h2>
        </div>
        <Button
          id="cheese1"
          className={cheese1}
          onClick={selectedCheese}
        >
          Molho Gorgonzola
        </Button>
        <Button
          id="cheese2"
          className={cheese2}
          onClick={selectedCheese}
        >
          Prato
        </Button>
        <Button
          id="cheese3"
          className={cheese3}
          onClick={selectedCheese}
        >
          Chedar
        </Button>
        <Button
          id="cheese4"
          className={cheese4}
          onClick={selectedCheese}
        >
          Sem queijo
        </Button>
      </>
    )
  }
}

Cheese.propTypes = {
  selectedCheese: PropTypes.func,
  cheese1: PropTypes.string,
  cheese2: PropTypes.string,
  cheese3: PropTypes.string,
  cheese4: PropTypes.string
}

export default Cheese
