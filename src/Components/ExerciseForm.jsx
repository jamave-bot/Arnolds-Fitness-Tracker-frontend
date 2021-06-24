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
            console.log(exerciseObj)
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
 
   
    render() {
        let workoutArr = this.state.exercisesArr.map(exercise => 
            <div key={exercise.id}>
              <h3>{exercise.name}</h3> 
              <p>Weight:{exercise.weight}</p>
              <p>Sets:{exercise.sets}</p> 
              <p>Reps:{exercise.duration}</p> 
              <p>Calories Burned:{exercise.calories_burned}</p>
            </div> )
        return (
            <>
                <h1>{this.props.workoutObj.name}</h1>  
                {workoutArr}
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <label>Name of Exercise</label> <br></br>
                    <input placeholder='Name of Exercise' onChange={this.handleChange} name="name" value={this.state.name}/>
                    </Form.Field>

                    <Form.Field>
                    <label>Weight?</label> <br></br>
                    <input placeholder="Are you using weight?" onChange={this.handleChange} name="weight" value={this.state.weight} />
                    </Form.Field>

                    <Form.Field>
                    <label>Sets</label> <br></br>
                    <input placeholder="Sets" onChange={this.handleChange} name="sets" value={this.state.sets}/>
                    </Form.Field>

                    <Form.Field>
                    <label>Reps</label> <br></br>
                    <input placeholder="Reps" onChange={this.handleChange} name="reps" value={this.state.reps}/>
                    </Form.Field>

                    <Form.Field>
                    <label>Duration</label> <br></br>
                    <input placeholder="Duration (minutes)" onChange={this.handleChange} name="duration" value={this.state.duration}/>
                    </Form.Field>

                    <Form.Field>
                    <label>Calories Burned</label> <br></br>
                    <input placeholder="Estimated Calories Burned" onChange={this.handleChange} name="calories_burned" value={this.state.calories_burned}/>
                    </Form.Field>


                    <Button type='submit'>Add Exercise</Button>
                </Form>

                <Button onClick={this.props.toggleExerciseForm}>Finish</Button>
            </>
        )
    }
}
