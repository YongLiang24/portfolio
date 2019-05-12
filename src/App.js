import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import {Card, Image, Icon, Popup, Label} from 'semantic-ui-react'
import HomeCard from './components/HomeCard';
import myself from './myself.png'

class App extends React.Component{

  handleMenuItem = (ev)=>{
    console.log("check menuitem:", ev.target.id)
  }

  render(){
    return (
      <div>
        <NavBar handleMenuItem={this.handleMenuItem}/><br/>
        <HomeCard handleMenuItem={this.handleMenuItem}/>
      </div>
    )
  }
}
export default App;
