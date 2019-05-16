import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HomeCard from './components/HomeCard';
import ProjectList from './components/ProjectList';
import AboutMe from './components/AboutMe';

class App extends React.Component{

  state={selectionName: "home"}

  handleMenuItem = (ev)=>{
    this.setState({selectionName: ev.target.id})
  }

  render(){
    if(this.state.selectionName === "home"){
      return(
        <div>
          <NavBar handleMenuItem={this.handleMenuItem}/><br/>
          <HomeCard handleMenuItem={this.handleMenuItem}/>
        </div>
      )}
      else if(this.state.selectionName === "project"){
        return(
          <div>
            <NavBar handleMenuItem={this.handleMenuItem}/><br/><br/><br/><br/>
            <ProjectList />
          </div>
        )  }
      else if(this.state.selectionName === "about"){
        return(
          <div>
            <NavBar handleMenuItem={this.handleMenuItem}/><br/><br/><br/>
            <AboutMe />
          </div>
        )}
      else{
        return(
          <div>
            <NavBar handleMenuItem={this.handleMenuItem}/><br/>
            <HomeCard handleMenuItem={this.handleMenuItem}/>
          </div>
        )}
  }
}
export default App;
