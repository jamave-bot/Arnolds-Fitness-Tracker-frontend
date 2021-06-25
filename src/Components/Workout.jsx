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


render() {
    let workoutArr = this.props.workout.exercises.map(exercise => 
    <div key={exercise.id}>
      <h5>{exercise.name}</h5> 
      <p>Weight:{exercise.weight}</p>
      <p>Sets:{exercise.sets}</p> 
      <p>Reps:{exercise.reps}</p> 
      <p>Calories Burned:{exercise.calories_burned}</p>
      <br></br>
    </div> )
                                                 
            
        
            
        return (

           
            <Card.Group>
             
            <div onClick={this.toggleShowingFront}>
               <div>{this.state.showingFront? 
                    <div>
                      <Card color='black'>
                         <Card.Content>
                             <Card.Header>{this.props.workout.name}</Card.Header>
                             <Card.Description>{this.props.workout.created_at.slice(0,10)}</Card.Description>
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
                          <Card.Description>{workoutArr}</Card.Description>

                          
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
