import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class ExerciseForm extends Component {
    state={
        name: "",
        workout_id: this.props.workoutObj.id,
        sets: "",
        reps: "",
        duration: "", 
        calories_burned:"",
        weight: "",
        exercisesArr: []
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        fetch("http://localhost:9393/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: this.state.name,
                workout_id: this.state.workout_id,
                sets: this.state.sets,
                reps: this.state.reps,
                duration: this.state.duration,
                calories_burned: this.state.calories_burned,
                weight: this.state.weight
            }),
        })
        .then((r) => r.json())
        .then((exerciseObj) =>{
            let copyArr = [...this.state.exercisesArr] 
            let newArr = [...copyArr, exerciseObj]
            this.setState({
                name: "",
                sets: "",
                reps: "",
                duration: "", 
                calories_burned:"",
                weight: "",
                exercisesArr: newArr
            })
        });
    }

    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }



    handleClick = (e)=>{
        this.props.toggleExerciseForm()
        this.props.addWorkoutToArr(this.props.workoutObj)
    }
 
   
    render() {
        let workoutArr = this.state.exercisesArr.map(exercise => 
            <div key={exercise.id}>
              <h5>{exercise.name}</h5> 
            {exercise.weight ? <p>Weight: {exercise.weight}</p> : null }
            {exercise.sets ? <p>Sets: {exercise.sets}</p> : null }
            {exercise.reps ? <p>Reps: {exercise.reps}</p> : null }
            {exercise.duration ? <p>Duration: {exercise.duration}</p> : null }
            {exercise.calories_burned ? <p>Calories Burned: {exercise.calories_burned}</p> : null }
            <br></br>
            </div> )
        return (
            <>
                <h1>{this.props.workoutObj.name}</h1>  
                {workoutArr}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <Form.Input width={3} label="Name of Exercise" placeholder='Name of Exercise' onChange={this.handleChange} name="name" value={this.state.name}/>
                    </Form.Field>

                    <Form.Field>
                    <Form.Input width={3} label="Weight" placeholder="Are you using weight?" onChange={this.handleChange} name="weight" value={this.state.weight} />
                    </Form.Field>

                    <Form.Field>
                    <Form.Input width={3} label="Sets" placeholder="Sets" onChange={this.handleChange} name="sets" value={this.state.sets}/>
                    <Form.Input width={3} label="Reps" placeholder="Reps" onChange={this.handleChange} name="reps" value={this.state.reps}/>
                    </Form.Field>

                    <Form.Field>
                    </Form.Field>

                    <Form.Field>
                    <Form.Input width={3} label="Duration" placeholder="Duration (minutes)" onChange={this.handleChange} name="duration" value={this.state.duration}/>
                    </Form.Field>

                    <Form.Field>
                    <Form.Input width={3} label="Calories Burned" placeholder="Estimated Calories Burned" onChange={this.handleChange} name="calories_burned" value={this.state.calories_burned}/>
                    </Form.Field>


                    <Button type='submit'>Add Exercise</Button>
                </Form>

                <Button onClick={this.handleClick}>Finish Workout</Button>
            </>
        )
    }
}
