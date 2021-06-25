import React, { Component } from 'react'
import Workout from './Workout'
import {  Grid, Segment } from 'semantic-ui-react'
import YouTube from 'react-youtube';


export default class WorkOutContainer extends Component {

//  The below will tranform our array object into an array of componenets {}{}{}     </></></>
    
    array=()=> {
    let arrayOfComp = this.props.workouts.map(workoutObj => { 
    // console.log(workoutObj)
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
                align: "center",
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
              <div style={{  
                width: '640px',
                color:"ghostwhite"
            }}>
              
              <p>1- Have a clear goal.
                 Know what it is you want. Know where you are headed. And DO NOT STOP until you get there.
             </p>

              <p>
               2- Think big. If you shoot for small, you will get small. And the same goes for the opposite. 
               It may seem comfortable to not ask for too much in life, but in fact, the opposite is true. 
               Nothing is more uncomfortable than regret.
              </p>
              <p>
               3- Turn your liabilities into assets.
               When you challenge the status quo, when you dare 
               to be different, people will try to tell you that 
               you are wrong. That what you have isn’t good, because
                it isn’t what they are used to. But the truth is, your 
                individuality is your greatest strength. Never let anyone 
                take it away from you.
             </p>

             <p>
              4- Ignore the little man.
              Ignore people who do not encourage you.
              Block the ones who criticize you. Just 
              because someone doesn’t understand your vision,
              does not mean that what you are doing is wrong.
            </p>

            <p>
              5- Work your butt off.
              There are no shortcuts to success.
              No matter what it is, you have to work hard to be the best at what you do.
            </p>
            <p>
             6- Make the world a better place.
             Do not seek out success simply for personal gratification.
             Use your gifts, your talent and your strengths to make a difference in the world.
            </p>

            <p>
             7- Don’t be realistic.
             Realistic is a waste of a word. Look at our current technology. 
             Look at aeroplanes. Being realistic will get you nowhere.
            </p>

            <p>
             8- Don’t be afraid to fail.
             To break through to the success you want, first you have to break
             through the fear of failure. If you are always worrying about not making 
             mistakes, you will never try anything new, and I that case, you have already failed.
            </p>

             <p>
             9- Model success.
             Success leaves clues. Do not get caught up in the conditioning of your parents 
             or your friends or society. You must carve your own path. Stay focused and surround
             yourself with people who have what it is you want, and listen to their advice!
             </p>

             <p>
             10- Believe in yourself.
             If you don’t back yourself, no one else will. Never let the limited thinking of other 
             people, or even yourself, stand in the way of the greatness you KNOW you can achieve.
             </p>
             </div>

              </Grid.Column>
              </Grid>
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
            </Segment> 


        )
    }
}
