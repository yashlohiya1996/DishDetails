
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import MainComponent from './Components/MainComponent';

class App extends Component{
  render(){
    return (
      <div>
        <MainComponent />
      </div>
    );

  }
}
export default App;
