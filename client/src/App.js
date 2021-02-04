import React from 'react';
import ReactDOM from 'react-dom';
import Img from './passenger-bag.jpg';
import './styles.scss';
import CoffeeForm from './CoffeeForm.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coffeeData: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:7100/coffees')
      .then(response => response.json())
      .then(json => {
        console.log('in here');
        this.setState({ coffeeData: json });

      });
  }

  render() {
    return (
      <div>
        <h1>Coffee Crossing</h1>
        <div>
          <img src={Img} />
          <h2>Add your coffee!</h2>
          <CoffeeForm />
          <h2>What I've Tried:</h2>
          <table>
            <thead>
            </thead>
            <tbody>
              {this.state.coffeeData.map(coffee =>
                <tr>
                  <td>{coffee.roaster}</td>
                  <td>{coffee.roasterLocation}</td>
                  <td>{coffee.coffeeName}</td>
                  <td>{coffee.process}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;