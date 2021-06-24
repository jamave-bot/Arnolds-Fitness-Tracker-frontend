import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

export default class NewUserForm extends Component {


    state={
        name: "",
        age: "",
        height:"",
        weight:"",
        bodyfat:"",
        password:"",
        professorName:""
    }

    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        
        fetch("http://localhost:9393/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
        .then((r) => r.json())
        .then((userObj) =>{
            console.log(userObj)
            // this.props.getWorkOutObj(workoutObj)
            this.setState({               
                name: "",
                age: "",
                height:"",
                weight:"",
                bodyfat:"",
                password:"",
            })
            // this.props.handleClick()
            // this.props.toggleExerciseForm()
        });

    }

    render() {
        console.log(this.state)
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                    <h2></h2>    
                    <label>Not a member? Sign up!</label> <br></br>
                    <input placeholder='Name' onChange={this.handleChange} name="name" value={this.state.name} />
                    </Form.Field>

                    <Form.Field>
                    <input placeholder='Age' onChange={this.handleChange} name="age" value={this.state.age} />
                    </Form.Field>

                    <Form.Field>
                    <input placeholder='Height' onChange={this.handleChange} name="height" value={this.state.height} />
                    </Form.Field>

                    <Form.Field>
                    <input placeholder='Weight' onChange={this.handleChange} name="weight" value={this.state.weight} />
                    </Form.Field>

                   
                    <Form.Field>
                    <input placeholder="Body Fat Percentage" onChange={this.handleChange} name="bodyfat" value={this.state.bodyfat}/>
                    </Form.Field>

                    <Form.Field>
                    <input placeholder="Choose a Password" onChange={this.handleChange} name="password" value={this.state.password}/>
                    </Form.Field>

                    <Button type='submit' onClick={this.handleSubmit}>Create User!</Button>
                </Form>
            </>
        )
    }


}
