import React from 'react';
import ReactDOM from 'react-dom';
import Img from './passenger-bag.jpg';
import './styles.scss';
//import CoffeeForm from './CoffeeForm.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coffeeData: [],
      newCoffee: {
        roaster: '',
        roasterLocation: '',
        coffeeName: '',
        process: ''
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();

    this.state.coffeeData.push(this.state.newCoffee);

    const data = this.state.newCoffee;

    fetch('http://localhost:7100/add', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .then(this.setState({ data }));

  }

  handleInputChange(propertyName, e) {
    e.preventDefault();
    //console.log(e.target.name);
    //console.log(e.target.value);

    const newCoffee = this.state.newCoffee;
    newCoffee[propertyName] = e.target.value;


    this.setState({ newCoffee: newCoffee });
  }

  componentDidMount() {
    fetch('http://localhost:7100/coffees')
      .then(response => response.json())
      .then(json => {
        this.setState({ coffeeData: json });
      });


    // fetch('http://localhost:7100/coffees')
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({ coffeeData: json });
    //   });
  }

  render() {
    return (
      <div>
        <h1>Coffee Crossing</h1>
        <h2>A logbook for coffee lovers!</h2>
        <div>
          {/* <img src={Img} /> */}


          <form id="addCoffee" name="addCoffee" onSubmit={this.handleSubmit}>

            <table id="coffeeInput">
              <tr><h3>Add a new coffee:</h3></tr>
              <tr>
                <td><label>Coffee roaster</label>
                  <input type="text" name="roaster" value={this.state.newCoffee.roaster} onChange={this.handleInputChange.bind(this, 'roaster')}></input></td>
              </tr>
              <tr>
                <td><label>Roaster location</label>
                  <input type="text" name="roasterLocation" value={this.state.newCoffee.roasterLocation} onChange={this.handleInputChange.bind(this, 'roasterLocation')}></input></td>
              </tr>
              <tr>
                <td><label>Coffee Name</label>
                  <input type="text" name="coffeeName" value={this.state.newCoffee.coffeeName} onChange={this.handleInputChange.bind(this, 'coffeeName')}></input></td>
              </tr>
              <tr>
                <td><label>Process</label>
                  <input type="text" name="process" value={this.state.newCoffee.process} onChange={this.handleInputChange.bind(this, 'process')}></input></td>
              </tr>
              <tr><td><button>Add new coffee!</button></td></tr>
            </table>
          </form>

          <h3>Coffees I've Tried:</h3>
          <table id="myCoffees">
            <thead>
              <th>Coffee Roaster</th>
              <th>Roaster Location</th>
              <th>Coffee Name</th>
              <th>Process</th>
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