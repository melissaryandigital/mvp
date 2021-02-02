import React from 'react';
import ReactDOM from 'react-dom';

var CoffeeForm = (props) => {
  return (
      <form>
        <table id="coffeeInput">
          <tr>
            <td><label>Coffee roaster</label>
              <input type="text" name="roaster" id="roaster"></input></td>
          </tr>
          <tr>
            <td><label>Location</label>
              <input type="text" name="location" id="location"></input></td>
          </tr>
          <tr><td><label>Coffee name</label>
            <input type="text" name="name" id="name"></input></td>
          </tr>
          <tr><td><label>Process</label>
            <input type="text" name="process" id="process"></input></td>
          </tr>
          <tr><td><button>Add new coffee!</button></td></tr>
        </table>
      </form>
  )
};

export default CoffeeForm;