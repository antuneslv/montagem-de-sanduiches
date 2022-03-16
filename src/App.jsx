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
      selectedBread: [],
      selectedMeat: [],
      selectedCheese: [],
      selectedSalad:[],
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
      {
        type: 'Complementos',
        item: 'Cebola Caramelizada',
        price: 2,
        id: 'complement2'
      },
      {
        type: 'Complementos',
        item: 'Molho Especial',
        price: 3,
        id: 'complement3'
      },
      {
        type: 'Complementos',
        item: 'Pimenta Jalapeño',
        price: 3,
        id: 'complement4'
      }
    ]

    this.breadButtons = [
      { id: 'bread1', class: 'assembly-button' },
      { id: 'bread2', class: 'assembly-button' },
      { id: 'bread3', class: 'assembly-button' },
      { id: 'bread4', class: 'assembly-button' }
    ]

    this.meatButtons = [
      { id: 'meat1', class: 'assembly-button' },
      { id: 'meat2', class: 'assembly-button' },
      { id: 'meat3', class: 'assembly-button' },
      { id: 'meat4', class: 'assembly-button' }
    ]

    this.cheeseButtons = [
      { id: 'cheese1', class: 'assembly-button' },
      { id: 'cheese2', class: 'assembly-button' },
      { id: 'cheese3', class: 'assembly-button' },
      { id: 'cheese4', class: 'assembly-button' }
    ]

    this.selectedBread = this.selectedBread.bind(this)
    this.selectedMeat = this.selectedMeat.bind(this)
    this.selectedCheese = this.selectedCheese.bind(this)
    this.selectedSalad = this.selectedSalad.bind(this)
    this.next = this.next.bind(this)
  }

  selectedBread($event) {
    this.breadButtons.forEach(button => {
      if (button.id != $event.target.id) {
        button.class = 'assembly-button'
      }
      if (button.id == $event.target.id) {
        button.class == 'assembly-button'
          ? (button.class = 'assembly-button highlighted-button button')
          : (button.class = 'assembly-button')
      }
    })

    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        this.setState({
          selectedBread: [this.sandwichItems[index]],
          previewList: [this.sandwichItems[index]],
          totalPrice: element.price
        })
      }
    })

    return this.breadButtons
  }

  selectedMeat($event) {
    this.meatButtons.forEach(button => {
      if (button.id != $event.target.id) {
        button.class = 'assembly-button'
      }
      if (button.id == $event.target.id) {
        button.class == 'assembly-button'
          ? (button.class = 'assembly-button highlighted-button button')
          : (button.class = 'assembly-button')
      }
    })

    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        this.setState({
          selectedMeat: [this.sandwichItems[index]],
          previewList: this.state.selectedBread.concat(
            this.sandwichItems[index]
          ),
          totalPrice: this.state.selectedBread[0].price + element.price
        })
      }
    })

    return this.meatButtons
  }

  selectedCheese($event) {
    this.cheeseButtons.forEach(button => {
      if (button.id != $event.target.id) {
        button.class = 'assembly-button'
      }
      if (button.id == $event.target.id) {
        button.class == 'assembly-button'
          ? (button.class = 'assembly-button highlighted-button button')
          : (button.class = 'assembly-button')
      }
    })

    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        this.setState({
          selectedCheese: [this.sandwichItems[index]],
          previewList: this.state.selectedBread.concat(
            this.state.selectedMeat,
            this.sandwichItems[index]
          ),
          totalPrice:
            this.state.selectedBread[0].price +
            this.state.selectedMeat[0].price +
            element.price
        })
      }
    })

    return this.cheesetButtons
  }
  
  selectedSalad($event) {
    $event.target.className == 'assembly-button button'
      ? ($event.target.className = 'assembly-button highlighted-button button')
      : ($event.target.className = 'assembly-button button')

    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        if (!this.state.selectedSalad.includes(this.sandwichItems[index])){
          this.setState({
            selectedSalad: [...this.state.selectedSalad, this.sandwichItems[index]]
            })
        } else {
          this.setState({
            selectedSalad: this.state.selectedSalad.filter(
              element => element != this.sandwichItems[index]
            )
          })
        }
        this.setState({
          previewList: this.state.selectedBread.concat(
            this.state.selectedMeat,
            this.state.selectedCheese,
            this.state.selectedSalad
          )
        })
      }
    })
  }

  next() {
    if (
      this.state.sandwichStep == 'stepBread' &&
      this.state.previewList.length == 1
    ) {
      this.setState({ sandwichStep: 'stepMeat' })
    } else if (this.state.sandwichStep == 'stepMeat') {
      this.setState({ sandwichStep: 'stepCheese' })
    } else if (this.state.sandwichStep == 'stepCheese') {
      this.setState({ sandwichStep: 'stepSalad' })
    } else if (this.state.sandwichStep == 'stepSalad') {
      this.setState({ sandwichStep: 'stepComplement' })
    }
  }

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  sandwichStep={this.state.sandwichStep}
                  next={this.next}
                  total={this.state.totalPrice}
                  sandwichItems={this.state.previewList}
                  selectedBread={this.selectedBread}
                  bread1={this.breadButtons[0].class}
                  bread2={this.breadButtons[1].class}
                  bread3={this.breadButtons[2].class}
                  bread4={this.breadButtons[3].class}
                  selectedMeat={this.selectedMeat}
                  meat1={this.meatButtons[0].class}
                  meat2={this.meatButtons[1].class}
                  meat3={this.meatButtons[2].class}
                  meat4={this.meatButtons[3].class}
                  selectedCheese={this.selectedCheese}
                  cheese1={this.cheeseButtons[0].class}
                  cheese2={this.cheeseButtons[1].class}
                  cheese3={this.cheeseButtons[2].class}
                  cheese4={this.cheeseButtons[3].class}
                  selectedSalad={this.selectedSalad}
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
