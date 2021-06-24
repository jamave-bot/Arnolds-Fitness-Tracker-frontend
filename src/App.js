import './App.css';
import React, { Component } from 'react'

import Header from './Components/Header';
import SearchBar from './Components/SearchBar.jsx';
import LogWorkout from './Components/LogWorkout'
import WorkoutContainer from './Components/WorkOutContainer'
import Login from './Components/Login'
import LogOut from './Components/LogOut'


export default class App extends Component {


  state= {
    // user: {workouts:[]},
    name: '',
    age: 0,
    height: '', 
    weight: 0,
    bodyfat: 0.0,
    workouts: [],
    loggedIn : false
  }


  logIn = (user)=>{
    if (user.error){
      alert("Username or Password is Wrong!")
    } else{
      this.setState({
        name: user.name,
        age: user.age,
        height: user.height,
        weight: user.weight,
        bodyfat: user.bodyfat,
        workouts: user.workouts,
        loggedIn: !this.state.loggedIn
      })
    }
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


  logOut = ()=>{
    this.setState({
      name: '',
      age: 0,
      height: '',
      weight: 0,
      bodyfat: 0.0,
      workouts: [],
      loggedIn: !this.state.loggedIn
    })
  }


  render() {
    console.log(this.state.user)
    return (
      <div>
         <Header />
         {this.state.loggedIn? <LogOut user={this.state} logOut={this.logOut}/> : <Login logIn={this.logIn}/>}
         <LogWorkout />
         <SearchBar />
         <WorkoutContainer user={this.state} deleteWorkout={this.deleteWorkout}/>
      </div>
    )
  }
}
