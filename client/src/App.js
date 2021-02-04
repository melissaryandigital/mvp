import React from 'react';
import ReactDOM from 'react-dom';
import Img from './passenger-bag.jpg';
import './styles.scss';
import CoffeeForm from './CoffeeForm.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      // coffeeData: [
      //   {
      //     id: 1,
      //     roaster: 'Verve',
      //     roasterLocation: 'Santa Cruz, CA',
      //     name: 'Jose Guzman',
      //     process: 'washed',
      //   },
      //   {
      //     id: 2,
      //     roaster: 'Passenger',
      //     roasterLocation: 'Lancaster, PA',
      //     name: 'Gesha Village',
      //     process: 'natural',
      //   },
      //   {
      //     id: 3,
      //     roaster: 'Cadenza',
      //     roasterLocation: 'Houston, TX',
      //     name: 'Colombia Huila',
      //     process: 'honey',
      //   }
      // ]

    }
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