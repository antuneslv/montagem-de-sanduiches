import { Component } from 'react'
import Header from '../../header'
import Main from '../../main'
import img from '../../img/image-sandwich.png'
import Preview from './preview'
import SandwichAssembly from './sandwich-assembly'
import './style.css'

class Home extends Component {
  render() {
    return (
      <>
        <Header title="Monte Seu Sanduíche" />
        <Main>
          <div className="img-assembly">
            <img className="img" src={img} alt="Imagem do Sanduíche" />
            <SandwichAssembly
              sandwichStep={this.props.sandwichStep}
              selectedBread={this.props.selectedBread}
              bread1={this.props.bread1}
              bread2={this.props.bread2}
              bread3={this.props.bread3}
              bread4={this.props.bread4}
              selectedMeat={this.props.selectedMeat}
              meat1={this.props.meat1}
              meat2={this.props.meat2}
              meat3={this.props.meat3}
              meat4={this.props.meat4}
              selectedCheese={this.props.selectedCheese}
              cheese1={this.props.cheese1}
              cheese2={this.props.cheese2}
              cheese3={this.props.cheese3}
              cheese4={this.props.cheese4}
              selectedSalad={this.props.selectedSalad}
            />
          </div>
          <Preview
            total={this.props.total}
            sandwichItems={this.props.sandwichItems}
            next={this.props.next}
            sandwichStep={this.props.sandwichStep}
          />
        </Main>
      </>
    )
  }
}

export default Home
