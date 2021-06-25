import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'

export default class Workout extends Component {

state = {
 showingFront: true,
 }



toggleShowingFront = () => {
    this.setState({
      showingFront: !this.state.showingFront
     })}

     
deleteHandler = () => {
   this.props.deleteWorkout(this.props.workout.id)
}


render() {
    let workoutArr = this.props.workout.exercises.map(exercise => 
    <div key={exercise.id}>
      <p>{exercise.name}</p> 
      <p>Sets:{exercise.sets}</p> 
      <p>Reps:{exercise.duration}</p> 
      <p>Calories Burned:{exercise.calories_burned}</p>
      <p>Weight:{exercise.weight}</p>
    </div> )
                                                 
            
        
            
        return (

           
            <div onClick={this.toggleShowingFront}>
               <div>{this.state.showingFront? 
                     <div id="workoutFront">{this.props.workout.name}
                         <br></br>
                         {this.props.workout.created_at}
                         <br></br>
                         <Button onClick={this.deleteHandler}>Delete</Button>
                         <br></br>
                         <br></br>
                         <br></br>
                     </div>
                     :
                     <div id="workoutBack">
                         <p> Exercise Details</p>
                         {workoutArr}                               
                     </div>
                    }                
                </div>     
                
                           
            </div>
            
        )
    }
}
