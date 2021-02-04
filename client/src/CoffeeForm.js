import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class CoffeeForm extends Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   roaster: '',
    //   location: '',
    //   coffeeName: '',
    //   process: ''
    // };
  }

  // onChange(e) {
  //   this.setState({ [e.target.name]: e.target.value });
  // }


  // componentDidMount() {
  //   fetch('http://localhost:7100/coffees', {
  //     method: 'post',
  //     body: JSON.stringify(opts)
  //   })
  //     .then(response => response.json())
  //     .then(json => {
  //       this.setState({ coffeeData: json });
  //     });
  // }

  handleSubmit = (e) => {
    e.preventDefault()

  }

  handleInputChange = () => {

  }

  render() {
    //const {roaster, location, coffeeName, process} = this.state;

    return (
      <form id="add" name="add" onSubmit={this.handleSubmit}>
        <table id="coffeeInput">
          <tr>
            <td><label>Coffee roaster</label>
              <input type="text" name="roaster" value={"roaster"}></input></td>
          </tr>
          <tr><td><button>Add new coffee!</button></td></tr>
        </table>
      </form>
    )
  }
}

export default CoffeeForm;


// <tr>
// <td><label>Location</label>
//   <input type="text" name="location" value="location"></input></td>
// </tr>
// <tr><td><label>Coffee name</label>
// <input type="text" name="coffeeName" value="coffeeName"></input></td>
// </tr>
// <tr><td><label>Process</label>
// <input type="text" name="process" value="process"></input></td>
// </tr>