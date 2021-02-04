import React from 'react';
import ReactDOM from 'react-dom';
import Img from './passenger-bag.jpg';
import './styles.scss';
//import CoffeeForm from './CoffeeForm.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      coffeeData: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()

    console.log('The STATE is: ', this.state);

    const data = { username: 'example' };

    fetch('http://localhost:7100/add', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  handleInputChange(e) {
    e.preventDefault()
    console.log(e);
    console.log(e.target.name)
    console.log(e.target.value)

    this.setState({
      [e.target.roaster]: e.target.value
    })
  }

  componentDidMount() {
    fetch('http://localhost:7100/coffees')
      .then(response => response.json())
      .then(json => {
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

          <form id="add" name="add" onSubmit={this.handleSubmit}>
            <table id="coffeeInput">
              <tr>
                <td><label>Coffee roaster</label>
                  <input type="text" name="roaster" onChange={this.handleInputChange}></input></td>
              </tr>
              <tr><td><button>Add new coffee!</button></td></tr>
            </table>
          </form>

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