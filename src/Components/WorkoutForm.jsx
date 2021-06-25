import React, { Component } from 'react'
import NewWorkoutForm from './NewWorkoutForm'
import { Button } from 'semantic-ui-react'
import ExerciseForm from './ExerciseForm'


export default class WorkoutForm extends Component {

    state={
        showWorkOutForm: false,
        showExerciseForm: false,
        workoutObj: {
            id: 1,
            exercises: []
        }
    }

    handleClick = ()=>{
        this.setState({
            showWorkOutForm: !this.state.showWorkOutForm
        })
    }


    workoutButton = () =>{
        return <Button onClick={this.handleClick}>{this.state.showWorkOutForm? "Nevermind": "New Workout?"}</Button>
    }

    toggleExerciseForm =()=>{
        this.setState({
            showExerciseForm: !this.state.showExerciseForm
        })
    }

    getWorkOutObj = (workoutObj)=>{
        this.setState({
            workoutObj: workoutObj
        })
    }

    render() {
        return (
            <>
            {this.state.showWorkOutForm ? 
                <NewWorkoutForm 
                    user_id={this.props.user_id} 
                    getWorkOutObj={this.getWorkOutObj} 
                    toggleExerciseForm={this.toggleExerciseForm}
                    handleClick={this.handleClick}
                /> 
                : 
                null 
            }   
            {this.state.showExerciseForm? <ExerciseForm workoutObj={this.state.workoutObj} toggleExerciseForm={this.toggleExerciseForm} addWorkoutToArr={this.props.addWorkoutToArr}/>: this.workoutButton()}
            </>
        )
    }
}
