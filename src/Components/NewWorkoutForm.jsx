import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'


export default class NewWorkoutForm extends Component {
    state={
        name: "",
        body_part: "",
        user_id: this.props.user_id
    }

    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        fetch("http://localhost:9393/workouts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
        .then((r) => r.json())
        .then((workoutObj) =>{
            console.log(workoutObj)
            this.props.getWorkOutObj(workoutObj)
            this.setState({
                name: '',
                body_part:''
            })
            this.props.handleClick()
            this.props.toggleExerciseForm()
        });

    }

    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <label>New Workout?</label> <br></br>
                    <input placeholder='Name of Workout' onChange={this.handleChange} name="name" value={this.state.name}/>
                    </Form.Field>
                    <Form.Field>
                    <label>Type</label> <br></br>
                    <input placeholder="What're you working out?" onChange={this.handleChange} name="body_part" value={this.state.body_part}/>
                    </Form.Field>
                    <Button type='submit'>Create Workout!</Button>
                </Form>
            </>
        )
    }
}
