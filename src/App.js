  
import './App.css';
import React, { Component } from 'react'

import Header from './Components/Header';
import SearchBar from './Components/SearchBar.jsx';
import WorkoutContainer from './Components/WorkOutContainer'
import Login from './Components/Login'
import LogOut from './Components/LogOut'
import WorkoutForm from './Components/WorkoutForm'
import NewUserForm from './Components/NewUserForm';


export default class App extends Component {


  state= {
    user: {},
    user_id: 0,
    name: '',
    age: 0,
    height: '', 
    weight: 0,
    bodyfat: 0.0,
    workouts: [],
    filter:'',
    loggedIn : false,
    ordered: false
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
        user: user,
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
      user: {},
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


  addWorkoutToArr = (workoutObj)=>{
    // fetch(`http://localhost:9393/workouts/${workoutId}`)
    //   .then(r => r.json())
    //   .then(workoutObj=>{
    //     console.log("this is the workoutObj in App.js: \n", workoutObj)
    //     let stateCopy = [...this.state.workouts]
    //     console.log("this it the stateCopy: \n", stateCopy)
    //     let workoutsCopy = [...stateCopy, workoutObj]
    //     console.log("this is the workoutsCopy: \n", workoutsCopy)
    //     this.setState({
    //       workouts: stateCopy
    //     })
    //   })

    // let stateCopy = [...this.state.workouts]
    // let workoutsCopy = [...stateCopy, workoutObj]
    // this.setState({
    //   workouts: workoutsCopy
    // })

    this.setState(prevState =>({
      workouts: [...prevState.workouts, workoutObj]
    }))

  }

  orderWorkouts = () =>{
    console.log(this.state.ordered)
    console.log(this.state.workouts)
    this.setState({
      ordered: !this.state.ordered
    })
    if (!this.state.ordered){
        let copiedArr = [...this.state.workouts]
        let orderedArr = copiedArr.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
        this.setState({
          workouts: orderedArr
        })
    } else {
      this.setState({
        workouts: this.state.user.workouts
      })
    }
  }

  render() {
    //SEARCH FILTER FUNTIONALITY
    let workoutsCopy = [...this.state.workouts]
    let newArrayOfWorkouts = workoutsCopy.filter((workout)=>{
      return (workout.name.toLowerCase().includes(this.state.filter.toLowerCase()))
      })
    return (
      <div style={{ 
        backgroundImage: `url("https://wallpapertag.com/wallpaper/full/8/a/7/717416-download-free-arnold-schwarzenegger-bodybuilding-wallpapers-posters-and-pictures-hd-1920x1200-download.jpg")`,
        // backgroundRepeat: 'no-repeat',
        height: '100%' 
    }}>
         <Header />
         {this.state.loggedIn? <LogOut user={this.state} logOut={this.logOut}/> : <Login logIn={this.logIn}/>}
         {this.state.loggedIn? <WorkoutForm user_id={this.state.user_id} addWorkoutToArr={this.addWorkoutToArr}/> : null }
         <br></br>
         {this.state.loggedIn? null: <NewUserForm />}
         {this.state.loggedIn?<SearchBar filter={this.state.filter} updateFilterState={this.updateFilterState} orderWorkouts={this.orderWorkouts}/>:null}
         <WorkoutContainer workouts={this.state.workouts? newArrayOfWorkouts: []} deleteWorkout={this.deleteWorkout}/>
         {/* <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br> */}
      </div>
    )
  }
}