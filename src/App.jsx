import { Component } from 'react'
import Home from './components/routes/home'
import Checkout from './components/routes/checkout'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      sandwichStep: 'stepBread',
      selectedBread: [],
      selectedMeat: [],
      selectedCheese: [],
      selectedSalads: [],
      selectedComplements: [],
      singleItemsList: [],
      totalPrice: 0,
      isButtonDisabled: true
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
    this.selectedComplement = this.selectedComplement.bind(this)
    this.next = this.next.bind(this)
  }

  selectedBread($event) {
    this.setState({ isButtonDisabled: false })

    this.breadButtons.forEach(button => {
      if (button.id != $event.target.id) {
        button.class = 'assembly-button'
      }
      if (button.id == $event.target.id) {
        button.class == 'assembly-button' &&
          (button.class = 'assembly-button highlighted-button button')
      }
    })

    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        this.setState({
          selectedBread: [this.sandwichItems[index]],
          singleItemsList: [this.sandwichItems[index]],
          totalPrice: element.price
        })
      }
    })

    return this.breadButtons
  }

  selectedMeat($event) {
    this.setState({ isButtonDisabled: false })

    this.meatButtons.forEach(button => {
      if (button.id != $event.target.id) {
        button.class = 'assembly-button'
      }
      if (button.id == $event.target.id) {
        button.class == 'assembly-button' &&
          (button.class = 'assembly-button highlighted-button button')
      }
    })

    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        this.setState({
          selectedMeat: [this.sandwichItems[index]],
          singleItemsList: this.state.selectedBread.concat(
            this.sandwichItems[index]
          ),
          totalPrice: this.state.selectedBread[0].price + element.price
        })
      }
    })

    return this.meatButtons
  }

  selectedCheese($event) {
    this.setState({ isButtonDisabled: false })

    this.cheeseButtons.forEach(button => {
      if (button.id != $event.target.id) {
        button.class = 'assembly-button'
      }
      if (button.id == $event.target.id) {
        button.class == 'assembly-button' &&
          (button.class = 'assembly-button highlighted-button button')
      }
    })

    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        this.setState({
          selectedCheese: [this.sandwichItems[index]],
          singleItemsList: this.state.selectedBread.concat(
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
        if (!this.state.selectedSalads.includes(this.sandwichItems[index])) {
          this.setState({
            selectedSalads: [
              ...this.state.selectedSalads,
              this.sandwichItems[index]
            ]
          })
        } else {
          this.setState({
            selectedSalads: this.state.selectedSalads.filter(
              element => element != this.sandwichItems[index]
            )
          })
        }
      }
    })
  }

  selectedComplement($event) {
    $event.target.className == 'assembly-button button'
      ? ($event.target.className = 'assembly-button highlighted-button button')
      : ($event.target.className = 'assembly-button button')

    this.sandwichItems.forEach((element, index) => {
      if ($event.target.id == element.id) {
        if (!this.state.selectedComplements.includes(this.sandwichItems[index])) {
          this.setState({
            selectedComplements: [
              ...this.state.selectedComplements,
              this.sandwichItems[index]
            ]
          })
        } else {
          this.setState({
            selectedComplements: this.state.selectedComplements.filter(
              element => element != this.sandwichItems[index]
            )
          })
        }
      }
    })
  }

  next() {
    if (this.state.sandwichStep == 'stepBread') {
      this.setState({ sandwichStep: 'stepMeat', isButtonDisabled: true })
    } else if (this.state.sandwichStep == 'stepMeat') {
      this.setState({ sandwichStep: 'stepCheese', isButtonDisabled: true })
    } else if (this.state.sandwichStep == 'stepCheese') {
      this.setState({ sandwichStep: 'stepSalad' })
    } else if (this.state.sandwichStep == 'stepSalad') {
      this.setState({ sandwichStep: 'stepComplement' })
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.sandwichStep == 'stepSalad') {
      if (prevState.selectedSalads != this.state.selectedSalads) {
        this.setState({
          totalPrice:
            this.state.selectedBread[0].price +
            this.state.selectedMeat[0].price +
            this.state.selectedCheese[0].price +
            this.state.selectedSalads.reduce(
              (previousValue, currentValue) =>
                previousValue + currentValue.price,
              0
            )
        })
      }
    }
    if (this.state.sandwichStep == 'stepComplement') {
      if (prevState.selectedComplements != this.state.selectedComplements) {
        this.setState({
          totalPrice:
            this.state.selectedBread[0].price +
            this.state.selectedMeat[0].price +
            this.state.selectedCheese[0].price +
            this.state.selectedSalads.reduce(
              (previousValue, currentValue) =>
                previousValue + currentValue.price,
              0
            ) +
            this.state.selectedComplements.reduce(
              (previousValue, currentValue) =>
                previousValue + currentValue.price,
              0
            )
        })
      }
    }
  }

  render() {
    const {
      sandwichStep,
      totalPrice,
      singleItemsList,
      selectedSalads,
      selectedComplements,
      isButtonDisabled
    } = this.state

    return (
      <div className="wrapper">
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  sandwichStep={sandwichStep}
                  next={this.next}
                  total={totalPrice}
                  singleItems={singleItemsList}
                  saladItems={selectedSalads}
                  complementItems={selectedComplements}
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
                  selectedComplement={this.selectedComplement}
                  disabled={isButtonDisabled}
                />
              }
            />
            <Route
              path="/pagamento"
              element={
                <Checkout
                  singleItems={singleItemsList}
                  saladItems={selectedSalads}
                  complementItems={selectedComplements}
                  total={totalPrice}
                />
              }
            />
          </Routes>
        </HashRouter>
      </div>
    )
  }
}

export default App;
