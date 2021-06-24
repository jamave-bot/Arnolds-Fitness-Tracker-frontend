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
        
        this.setState({
          user: usersArr[0]
        })
      })
  } 

  // DELETES WORKOUT VIA FETCH AND ALSO CHANGES THE FRONT END
  deleteWorkout = (id) => {
    fetch(`http://localhost:9393/workouts/${id}`, {
      method: "DELETE",
      })
      .then(res => res.json())
      .then(() => {

        let userCopy = {...this.state.user}
        let arrayWithoutDeleted = this.state.user.workouts.filter((workoutObj) => { 
           return workoutObj.id !== id})

        userCopy.workouts=arrayWithoutDeleted
        this.setState({user: userCopy})    
      })
  }




  render() {
    console.log(this.state.user)
    return (
      <div>
         <Header />
         <LogWokout />
         <SearchBar />
         <WorkoutContainer user={this.state.user} deleteWorkout={this.deleteWorkout}/>
      </div>
    )
  }
}
