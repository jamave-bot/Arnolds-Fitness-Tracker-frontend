import React, { Component } from 'react'
import Workout from './Workout'


export default class WorkOutContainer extends Component {

//  The below will tranform our array object into an array of componenets {}{}{}     </></></>
    // arrayOfComp = props.arrayOfWorkouts.map(workoutObj => { 
    //  return <Workout   key={workoutObj.key} workout={this.props.workout/>
        

    // })

  




    render() {
        return (
            <div>
                <h2> Workout Log</h2>
                  <ul className="cards">
                  


                  </ul>
            </div>
        )
    }
}
