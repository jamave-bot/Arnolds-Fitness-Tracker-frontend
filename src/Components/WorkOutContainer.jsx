import React, { Component } from 'react'
import Workout from './Workout'


export default class WorkOutContainer extends Component {

//  The below will tranform our array object into an array of componenets {}{}{}     </></></>
    
    array=()=> {
     let arrayOfComp = this.props.workouts.map(workoutObj => { 
     return <Workout key={workoutObj.id} workout={workoutObj}/>
       })
    return arrayOfComp
    }

    
    
    
    
    render() {
        // console.log(this.props.workouts)
        // console.log(this.arrayOfComp)
        // console.log(arrayOfComp)
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
