import { Component } from 'react'
import Bread from './bread'
import Meat from './meat'
import Cheese from './cheese'
import Salad from './salad'
import Complement from './complement'
import './style.css'

class SandwichAssembly extends Component {
  render() {
    let step
    switch (this.props.sandwichStep) {
      case 'stepBread':
        step = (
          <Bread
            selectedBread={this.props.selectedBread}
            bread1={this.props.bread1}
            bread2={this.props.bread2}
            bread3={this.props.bread3}
            bread4={this.props.bread4}
          />
        )
        break

      case 'stepMeat':
        step = (
          <Meat
            selectedMeat={this.props.selectedMeat}
            meat1={this.props.meat1}
            meat2={this.props.meat2}
            meat3={this.props.meat3}
            meat4={this.props.meat4}
          />
        )
        break

      case 'stepCheese':
        step = (
          <Cheese
            selectedCheese={this.props.selectedCheese}
            cheese1={this.props.cheese1}
            cheese2={this.props.cheese2}
            cheese3={this.props.cheese3}
            cheese4={this.props.cheese4}
          />
        )
        break

      case 'stepSalad':
        step = (
          <Salad
            selectedSalad={this.props.selectedSalad}
          />
        )
        break

      case 'stepComplement':
        step = <Complement />
        break
    }
    return <div className="assembly-wrapper">{step}</div>
  }
}

export default SandwichAssembly
