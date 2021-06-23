import './App.css';
import React, { Component } from 'react'

import Header from './Components/Header';
import SearchBar from './Components/SearchBar.jsx';
import LogWokout from './Components/LogWorkout'
import WorkoutContainer from './Components/WorkOutContainer'



export default class App extends Component {


  state= {



  }






  render() {
    return (
      <div>
         <Header />
         <LogWokout />
         <SearchBar />
         <WorkoutContainer />
      </div>
    )
  }
}
