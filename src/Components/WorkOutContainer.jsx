import React, { Component } from 'react'
import Workout from './Workout'


export default class WorkOutContainer extends Component {

//  The below will tranform our array object into an array of componenets {}{}{}     </></></>
    
    array=()=> {
     let arrayOfComp = this.props.user.workouts.map(workoutObj => { 
     return <Workout key={workoutObj.id} workout={workoutObj} deleteWorkout={this.props.deleteWorkout}/>
       })
    return arrayOfComp
    }

    
    
    
    
    render() {
       


        return (
            <div>
                <h2> Workout Log</h2>
                  <ul className="cards">
                  {this.array()}
                  </ul>
            </div>
        )
    }
}
