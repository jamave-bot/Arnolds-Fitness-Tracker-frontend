import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'


export default class Login extends Component {
    state={
        name: '',
        password: ''
    }

    handleSubmit = (evt)=>{
        evt.preventDefault()
        fetch("http://localhost:9393/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        })
        .then((r) => r.json())
        .then((userObj) =>{
            console.log(userObj)
            this.props.logIn(userObj)
            this.setState({
                name: '',
                password:''
            })
        });
    }


    handleChange = (evt)=>{
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    render() {
        return (
            <Form>
                <Form.Field onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input placeholder='Enter Account Name' name='name' onChange={this.handleChange} value={this.state.name}/>
                </Form.Field>
                <Form.Field>
                <label>Password</label>
                <input placeholder='...' type='password' name='password'onChange={this.handleChange} value={this.state.password}/>
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        )
    }
}
