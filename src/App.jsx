import { Component } from 'react'
import Home from './components/routes/home'
import Checkout from './components/routes/checkout'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      sandwichStep: 'stepBread',
      previewList: [],
      totalPrice: 0
    }

    this.sandwichItems = [
      { type: 'Pão', item: 'Brioche', price: 5, id: 'bread1' },
      { type: 'Pão', item: 'Australiano', price: 4, id: 'bread2' },
      { type: 'Pão', item: 'Gergelim', price: 3, id: 'bread3' },
      { type: 'Pão', item: 'Sal', price: 2.5, id: 'bread4' },
      { type: 'Carne', item: 'Boi', price: 8, id: 'meat1' },
      { type: 'Carne', item: 'Porco', price: 6, id: 'meat2' },
      { type: 'Carne', item: 'Frango', price: 4, id: 'meat3' },
      { type: 'Carne', item: 'Vegetariano', price: 6, id: 'meat4' },
      { type: 'Queijo', item: 'Molho Gorgonzola', price: 8, id: 'cheese1' },
      { type: 'Queijo', item: 'Prato', price: 6, id: 'cheese2' },
      { type: 'Queijo', item: 'Chedar', price: 6, id: 'cheese3' },
      { type: 'Queijo', item: 'Sem Queijo', price: 0, id: 'cheese4' },
      { type: 'Saladas', item: 'Alface', price: 1, id: 'salad1' },
      { type: 'Saladas', item: 'Tomate', price: 2, id: 'salad2' },
      { type: 'Saladas', item: 'Cebola', price: 2, id: 'salad3' },
      { type: 'Saladas', item: 'Picles', price: 4, id: 'salad4' },
      { type: 'Complementos', item: 'Bacon', price: 4, id: 'complement1' },
      { type: 'Complementos', item: 'Cebola Caramelizada', price: 2, id: 'complement2' },
      { type: 'Complementos', item: 'Molho Especial', price: 3, id: 'complement3' },
      { type: 'Complementos', item: 'Pimenta Jalapeño', price: 3, id: 'complement4' }
    ]

    this.selectedBread = this.selectedBread.bind(this)
    this.next = this.next.bind(this)
    
  }

  selectedBread($event) {
    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        this.setState({ previewList: [this.sandwichItems[index]]})
        console.log(this.state.previewList)
      }
    })
  }

  next() {
    if (this.state.sandwichStep == 'stepBread') {
      this.setState({sandwichStep: 'stepMeat'})
    } else if (this.state.sandwichStep == 'stepMeat') {
      this.setState({sandwichStep: 'stepCheese'})
    } else if (this.state.sandwichStep == 'stepCheese') {
      this.setState({sandwichStep: 'stepSalad'})
    } else if (this.state.sandwichStep == 'stepSalad') {
      this.setState({sandwichStep: 'stepComplement'})
    }
  }

  render() {
    let { totalPrice } = this.state

    return (
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  sandwichStep={this.state.sandwichStep}
                  selectedBread={this.selectedBread}
                  next={this.next}
                  total={totalPrice}
                  sandwichItems={this.state.previewList}
                />
              }
            />
            <Route path="/pagamento" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
