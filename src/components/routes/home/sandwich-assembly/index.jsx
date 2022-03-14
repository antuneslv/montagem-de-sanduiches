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
        step = <Bread selectedBread={this.props.selectedBread} />
        break

      case 'stepMeat':
        step = <Meat />
        break

      case 'stepCheese':
        step = <Cheese />
        break

      case 'stepSalad':
        step = <Salad />
        break

      case 'stepComplement':
        step = <Complement />
        break
    }
    return <div className="assembly-wrapper">{step}</div>
  }
}

export default SandwichAssembly
