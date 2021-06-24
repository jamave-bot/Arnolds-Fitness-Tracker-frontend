import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class ExerciseForm extends Component {
    state={
        name: "",
        workout_id: this.props.user_id,
        sets: 0,
        reps: 0,
        duration: 0, 
        calories_burned:0,
        weight: 0,
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        fetch("http://localhost:9393/exercises", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
        .then((r) => r.json())
        .then((exerciseObj) =>{
            console.log(exerciseObj)
            this.setState({
                name: "",
                workout_id: this.props.user_id,
                sets: 0,
                reps: 0,
                duration: 0, 
                calories_burned:0,
                weight: 0,
            })
        });
    }

    handleChange = (evt)=>{
        let input = evt.target.value
        if (typeof(this.state[evt.target.name]) === 'number'){
            input = parseInt(this.state[evt.target.name])
        }
        this.setState({
            [evt.target.name]: input
        })
    }

    render() {
        return (
            <>
                <h1>{this.props.workoutObj.name}</h1>  
                
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <label>Name of Exercise</label> <br></br>
                    <input placeholder='Name of Exercise' onChange={this.handleChange} name="name" value={this.state.name}/>
                    </Form.Field>

                    <Form.Field>
                    <label>Weight?</label> <br></br>
                    <input placeholder="Are you using weight?" onChange={this.handleChange} name="weight" value={this.state.weight}/>
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
            </>
        )
    }
}
