import './App.css';
import React, { Component } from 'react'

import Header from './Components/Header';
import SearchBar from './Components/SearchBar.jsx';
import LogWokout from './Components/LogWorkout'
import WorkoutContainer from './Components/WorkOutContainer'



export default class App extends Component {


  state= {
      user: {workouts:[]}

      



  }


  componentDidMount(){
    fetch("http://localhost:9393/users")
      .then(res => res.json())
      .then((usersArr) => {
        console.log(usersArr[0])
        this.setState({
          user: usersArr[0]
        })
      })
  } 




  render() {
    console.log(this.state)
    return (
      <div>
         <Header />
         <LogWokout />
         <SearchBar />
         <WorkoutContainer user={this.state.user}/>
      </div>
    )
  }
}
