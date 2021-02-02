import React from 'react';
import ReactDOM from 'react-dom';
import Img from './sunrise.jpg';

const App = () => {
  return (
    <div>
      <h1>Inside the react app</h1>
      <div>
        <img src={Img} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));