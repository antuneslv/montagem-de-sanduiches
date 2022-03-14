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
