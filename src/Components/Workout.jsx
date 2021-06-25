import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card } from 'semantic-ui-react'
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
                 console.log(this.props.workout.exercises)                                
            
        
            
        return (

           <Card.Group>
             
            <div onClick={this.toggleShowingFront}>
               <div>{this.state.showingFront? 
                    <div>
                      <Card color='black'>
                         <Card.Content>
                             <Card.Header>{this.props.workout.name}</Card.Header>
                             <Card.Description>{this.props.workout.created_at}</Card.Description>
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
                          <Card.Description>Workout {workoutArr}</Card.Description>
                          <p>1- Have a clear goal.
Know what it is you want. Know where you are headed. And DO NOT STOP until you get there.

 

2- Think big.
If you shoot for small, you will get small. And the same goes for the opposite. It may seem comfortable to not ask for too much in life, but in fact, the opposite is true. Nothing is more uncomfortable than regret.

 

3- Turn your liabilities into assets.
When you challenge the status quo, when you dare to be different, people will try to tell you that you are wrong. That what you have isn’t good, because it isn’t what they are used to. But the truth is, your individuality is your greatest strength. Never let anyone take it away from you.

 

4- Ignore the little man.
Ignore people who do not encourage you. Block the ones who criticize you. Just because someone doesn’t understand your vision, does not mean that what you are doing is wrong.

 

5- Work your butt off.
There are no shortcuts to success. No matter what it is, you have to work hard to be the best at what you do.

 

6- Make the world a better place.
Do not seek out success simply for personal gratification. Use your gifts, your talent and your strengths to make a difference in the world.

 

7- Don’t be realistic.
Realistic is a waste of a word. Look at our current technology. Look at aeroplanes. Being realistic will get you nowhere.

 

8- Don’t be afraid to fail.
To break through to the success you want, first you have to break through the fear of failure. If you are always worrying about not making mistakes, you will never try anything new, and I that case, you have already failed.

 

9- Model success.
Success leaves clues. Do not get caught up in the conditioning of your parents or your friends or society. You must carve your own path. Stay focused and surround yourself with people who have what it is you want, and listen to their advice!

 

10- Believe in yourself.
If you don’t back yourself, no one else will. Never let the limited thinking of other people, or even yourself, stand in the way of the greatness you KNOW you can achieve.

</p>

                          
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
