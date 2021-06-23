import './App.css';
import React, { Component } from 'react'

import Header from './Components/Header';
import SearchBar from './Components/SearchBar.jsx';
import LogWorkout from './Components/LogWorkout'
import WorkoutContainer from './Components/WorkOutContainer'



export default class App extends Component {


  state= {
    searchTerm: ''
  }


  componentDidMount(){
    fetch('http://localhost:9393/users')
      .then()
  }

  setSearchTerm = (term)=>{
    this.setState({
      searchTerm: term
    })
  }

  render() {
    return (
      <div>
         <h1>{this.state.searchTerm}</h1>
         <Header />
         <LogWorkout />
         <SearchBar setSearchTerm={this.setSearchTerm} value={this.state.searchTerm}/>
         <WorkoutContainer />
      </div>
    )
  }
}
