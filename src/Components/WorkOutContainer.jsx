import React, { Component } from 'react'
import Workout from './Workout'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'

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
            
                <Segment style={{ 
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
                    // backgroundRepeat: 'no-repeat',
                    width:'1950px'  
                }}>
                  
                     
                      <div>
                        <h1 class="ui header">  
                          <i class="tasks icon"></i>
                          <div class="content" style={{color:"ghostwhite"}}>
                          Workout Log
                          </div>
                        </h1>
                        <ul className="cards">
                          {this.array()}
                         </ul>
                
                      </div>
                  <div class="ui vertical divider" ></div>



                       

                        
                        
                </Segment>



















       

      




        )
    }
}
