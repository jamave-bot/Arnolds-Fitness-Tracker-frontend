import React, { Component } from 'react'
import Workout from './Workout'
import { Divider, Grid, Image, Segment } from 'semantic-ui-react'
import YouTube from 'react-youtube';

export default class WorkOutContainer extends Component {

//  The below will tranform our array object into an array of componenets {}{}{}     </></></>
    
    array=()=> {
     let arrayOfComp = this.props.user.workouts.map(workoutObj => { 
     return <Workout key={workoutObj.id} workout={workoutObj} deleteWorkout={this.props.deleteWorkout}/>
       })
    return arrayOfComp
    }

        
    
    
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
              // https://www.youtube.com/watch?v=9CzmotLYznw
              autoplay: 1,
            },
          };
           let windowWidth = window.innerWidth 
           

        return (
            
                <Segment style={{ 
                    backgroundColor: 'rgba(52, 52, 52, 0.8)',
 
                    width: windowWidth
                }}>
                    <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                  
                     
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
                      </Grid.Column>
                
                  <Grid.Column >
                  <h1 class="ui header">  
                          <i class="tv icon"></i>
                          <div class="content" style={{color:"ghostwhite"}}>
                          Inspo Channel
                          </div>
                        </h1>
                  
                  <YouTube videoId="bO-2AEcRYhQ" opts={opts} onReady={this._onReady} />
                  

                  </Grid.Column>
                  </Grid>
                </Segment> 
















       

      




        )
    }
}
