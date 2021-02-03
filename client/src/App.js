import React from 'react';
import ReactDOM from 'react-dom';
import Img from './passenger-bag.jpg';
import './styles.scss';
import CoffeeForm from './CoffeeForm.js';



const App = (props) => {
  //const env = process.env.NODE_ENV
  // <p>{env}</p>

  // {props.fishes[0].name}
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
            {props.coffees.map(coffee => <tr><td>{coffee.roaster}</td><td>{coffee.roasterLocation}</td><td>{coffee.coffeeName}</td><td>{coffee.process}</td></tr>)}
          </tbody>
        </table>
        <div>
        </div>
      </div>
    </div>
  )
}

export default App;