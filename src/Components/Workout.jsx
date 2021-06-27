import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Button } from 'semantic-ui-react'


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


getTotalMin = (workoutArr)=>{
    if (workoutArr){
        let sum = 0;
        workoutArr.forEach(exercise=>{
            let addNum = exercise.duration
            if (!addNum){
                addNum = 0
            }
            sum += parseInt(addNum)
        })
        return sum
    } else {
        return 0
    }
}

getCalories = (workoutArr)=>{
    if (workoutArr){
        let sum = 0;
        workoutArr.forEach(exercise=>{
            let addNum = exercise.calories_burned
            if (!addNum){
                addNum = 0
            }
            sum += parseInt(addNum)
        })
        return sum
    } else {
        return 0
    }
}


getWorkoutArr = () =>{
    if (this.props.workout.exercises){
        return this.props.workout.exercises.map(exercise => 
            <div key={exercise.id}>
                <h5>{exercise.name}</h5> 
                {exercise.weight ? <p>Weight: {exercise.weight}</p> : null }
                {exercise.sets ? <p>Sets: {exercise.sets}</p> : null }
                {exercise.reps ? <p>Reps: {exercise.reps}</p> : null }
                {exercise.duration ? <p>Duration: {exercise.duration}</p> : null }
                {exercise.calories_burned ? <p>Calories Burned: {exercise.calories_burned}</p> : null }
                <br></br>
            </div> )
    } else{
        return []
    }
}

render() {

    let workoutArr = this.getWorkoutArr()
                                                
        
    
        
    return (

        
        <Card.Group>
            
        <div onClick={this.toggleShowingFront}>
            <div>{this.state.showingFront? 
                <div>
                    <Card color='black'>
                        <Card.Content>
                            <Card.Header>{this.props.workout.name}</Card.Header>
                            <Card.Description>{this.props.workout.created_at.slice(0,10).toString() + " " + this.props.workout.created_at.slice(10,7).toString() }  </Card.Description>
                            <Button color="red" onClick={this.deleteHandler}>Delete</Button>                        
                        </Card.Content>
                    </Card>
                    <br></br>
                    </div>
                    :
                    <div id="workoutBack">
                    <Card color='black'>
                    <Card.Content>
                        <Card.Header>{this.props.workout.name} Details</Card.Header>
                        <Card.Description>
                            {workoutArr}
                        <p>Total Duration: {this.getTotalMin(this.props.workout.exercises)} min.</p>  
                        <p>Approx. Calories Burned: {this.getCalories(this.props.workout.exercises)} cal.</p>  
                        </Card.Description>
                        
                    </Card.Content>  
                    </Card>
                    <br></br>

                                                
                    </div>
                }                
            </div>     
    
                        
            </div>
        </Card.Group>
        )
    }
}
