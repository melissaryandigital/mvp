import React from 'react';
import ReactDOM from 'react-dom';
import Img from './sunrise.jpg';
import './styles.scss';

const App = () => {
  const env = process.env.NODE_ENV
  return (
    <div>
      <h1>Inside the react app</h1>
      <div>
        <img src={Img} />
        <p>Hello</p>
        <p>{env}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));