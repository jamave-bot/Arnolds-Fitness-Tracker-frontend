  
import './App.css';
import React, { Component } from 'react'

import Header from './Components/Header';
import SearchBar from './Components/SearchBar.jsx';
import LogWorkout from './Components/LogWorkout'
import WorkoutContainer from './Components/WorkOutContainer'
import Login from './Components/Login'
import LogOut from './Components/LogOut'
import WorkoutForm from './Components/WorkoutForm'
import NewUserForm from './Components/NewUserForm';


export default class App extends Component {


  state= {
    user_id: 0,
    name: '',
    age: 0,
    height: '', 
    weight: 0,
    bodyfat: 0.0,
    workouts: [],
    filter:'',
    loggedIn : false
  }

   //UPDATE FILTER WITHIN STATE IN ACCORDANCE WITH OUR SEARCHBAR
   updateFilterState= (value) => {
    this.setState({
      filter: value
    })
 }


  logIn = (user)=>{
    if (user.error){
      alert("Username or Password is Wrong!")
    } else{
      this.setState({
        user_id: user.id,
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

        let userCopy = [...this.state.workouts]
        let arrayWithoutDeleted = userCopy.filter((workoutObj) => { 
           return workoutObj.id !== id})

        this.setState({workouts: arrayWithoutDeleted})    
      })
  }


  logOut = ()=>{
    this.setState({
      user_id: 0,
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
    //SEARCH FILTER FUNTIONALITY
    let workoutsCopy = [...this.state.workouts]
    let newArrayOfWorkouts = workoutsCopy.filter((workout)=>{
      return (workout.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      })
    return (
      <div>
         <Header />
         {this.state.loggedIn? <LogOut user={this.state} logOut={this.logOut}/> : <Login logIn={this.logIn}/>}
         <LogWorkout />
         {this.state.loggedIn? <WorkoutForm user_id={this.state.user_id}/> : null }
         {this.state.loggedIn? null: <NewUserForm />}
         {this.state.loggedIn?<SearchBar filter={this.state.filter} updateFilterState={this.updateFilterState}/>:null}
         <WorkoutContainer workouts={this.state.workouts} deleteWorkout={this.deleteWorkout}/>
      </div>
    )
  }
}