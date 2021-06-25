import './App.css';
import React, { Component } from 'react'


import Header from './Components/Header';
import SearchBar from './Components/SearchBar.jsx';
import LogWokout from './Components/LogWorkout'
import WorkoutContainer from './Components/WorkOutContainer'
import NewUserForm from './Components/NewUserForm';



export default class App extends Component {


  state= {
    user: {workouts:[]},
    filter: ""
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

 //UPDATE FILTER WITHIN STATE IN ACCORDANCE WITH OUR SEARCHBAR
  updateFilterState= (value) => {
    this.setState({
      filter: value
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
    //SEARCH FILTER FUNTIONALITY
    let arrayOfWorkouts = this.state.user.workouts
    let newArrayOfWorkouts = arrayOfWorkouts.filter((workout)=>{
    return (workout.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    })
    let userCopy = {...this.state.user}
    userCopy.workouts=newArrayOfWorkouts
    

    return (
      // <div class="big-container">

      <div style={{ 
          backgroundImage: `url("https://wallpapertag.com/wallpaper/full/8/a/7/717416-download-free-arnold-schwarzenegger-bodybuilding-wallpapers-posters-and-pictures-hd-1920x1200-download.jpg")`,
          // backgroundRepeat: 'no-repeat',
          width:'1950px'  
      }}>
         <Header />
         <LogWokout />
         <SearchBar filter={this.state.filter} updateFilterState={this.updateFilterState}/>
         <WorkoutContainer user={userCopy} deleteWorkout={this.deleteWorkout}/>
         <NewUserForm />
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
         <br></br>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
      </div>
    )
  }
}
