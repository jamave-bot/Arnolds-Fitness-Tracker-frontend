import './App.css';
import React, { Component } from 'react'

import Header from './Components/Header';
import SearchBar from './Components/SearchBar.jsx';
import LogWorkout from './Components/LogWorkout'
import WorkoutContainer from './Components/WorkOutContainer'
import Login from './Components/Login'



export default class App extends Component {


  state= {
    searchTerm: '',

  }


  // componentDidMount(){
  //   fetch('http://localhost:9393/users')
  //     .then()
  // }

  setSearchTerm = (term)=>{
    this.setState({
      searchTerm: term
    })
  }

  logIn = (user)=>{
    if (user.error){
      alert("Username or Password is Wrong!")
    }
  }

  render() {
    return (
      <div>
         <h1>{this.state.searchTerm}</h1>
         <Login logIn={this.logIn}/>
         <Header />
         <LogWorkout />
         <SearchBar setSearchTerm={this.setSearchTerm} value={this.state.searchTerm}/>
         <WorkoutContainer />
      </div>
    )
  }
}
