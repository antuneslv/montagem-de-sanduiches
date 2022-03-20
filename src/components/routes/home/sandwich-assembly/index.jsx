import { Component } from 'react'
import Bread from './bread'
import Meat from './meat'
import Cheese from './cheese'
import Salad from './salad'
import Complement from './complement'
import PropTypes from 'prop-types'
import './style.css'

class SandwichAssembly extends Component {
  render() {
    const {
      sandwichStep,
      selectedBread,
      bread1,
      bread2,
      bread3,
      bread4,
      selectedMeat,
      meat1,
      meat2,
      meat3,
      meat4,
      selectedCheese,
      cheese1,
      cheese2,
      cheese3,
      cheese4,
      selectedSalad,
      selectedComplement
    } = this.props
    let step

    switch (sandwichStep) {
      case 'stepBread':
        step = (
          <Bread
            selectedBread={selectedBread}
            bread1={bread1}
            bread2={bread2}
            bread3={bread3}
            bread4={bread4}
          />
        )
        break

      case 'stepMeat':
        step = (
          <Meat
            selectedMeat={selectedMeat}
            meat1={meat1}
            meat2={meat2}
            meat3={meat3}
            meat4={meat4}
          />
        )
        break

      case 'stepCheese':
        step = (
          <Cheese
            selectedCheese={selectedCheese}
            cheese1={cheese1}
            cheese2={cheese2}
            cheese3={cheese3}
            cheese4={cheese4}
          />
        )
        break

      case 'stepSalad':
        step = <Salad selectedSalad={selectedSalad} />
        break

      case 'stepComplement':
        step = <Complement selectedComplement={selectedComplement} />
        break

      default:
        step = (
          <Bread
            selectedBread={selectedBread}
            bread1={bread1}
            bread2={bread2}
            bread3={bread3}
            bread4={bread4}
          />
        )
        break
    }
    return <div className="assembly-wrapper">{step}</div>
  }
}

SandwichAssembly.propTypes = {
  sandwichStep: PropTypes.string,
  selectedBread: PropTypes.func,
  bread1: PropTypes.string,
  bread2: PropTypes.string,
  bread3: PropTypes.string,
  bread4: PropTypes.string,
  selectedMeat: PropTypes.func,
  meat1: PropTypes.string,
  meat2: PropTypes.string,
  meat3: PropTypes.string,
  meat4: PropTypes.string,
  selectedCheese: PropTypes.func,
  cheese1: PropTypes.string,
  cheese2: PropTypes.string,
  cheese3: PropTypes.string,
  cheese4: PropTypes.string,
  selectedSalad: PropTypes.func,
  selectedComplement: PropTypes.func
}

export default SandwichAssembly
