import { Component } from 'react'
import Header from '../../header'
import Main from '../../main'
import img from '../../img/image-sandwich.png'
import Preview from './preview'
import SandwichAssembly from './sandwich-assembly'
import PropTypes from 'prop-types'
import './style.css'

class Home extends Component {
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
      selectedComplement,
      total,
      singleItems,
      saladItems,
      complementItems,
      next,
      disabled
    } = this.props

    return (
      <>
        <Header title="Monte Seu Sanduíche" />
        <Main>
          <div className="img-assembly">
            <img className="img" src={img} alt="Imagem do Sanduíche" />
            <SandwichAssembly
              sandwichStep={sandwichStep}
              selectedBread={selectedBread}
              bread1={bread1}
              bread2={bread2}
              bread3={bread3}
              bread4={bread4}
              selectedMeat={selectedMeat}
              meat1={meat1}
              meat2={meat2}
              meat3={meat3}
              meat4={meat4}
              selectedCheese={selectedCheese}
              cheese1={cheese1}
              cheese2={cheese2}
              cheese3={cheese3}
              cheese4={cheese4}
              selectedSalad={selectedSalad}
              selectedComplement={selectedComplement}
            />
          </div>
          <Preview
            total={total}
            singleItems={singleItems}
            saladItems={saladItems}
            complementItems={complementItems}
            next={next}
            sandwichStep={sandwichStep}
            disabled={disabled}
          />
        </Main>
      </>
    )
  }
}

Home.propTypes = {
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
  selectedComplement: PropTypes.func,
  total: PropTypes.number,
  singleItems: PropTypes.array,
  saladItems: PropTypes.array,
  complementItems: PropTypes.array,
  next: PropTypes.func,
  disabled: PropTypes.bool
}

export default Home
