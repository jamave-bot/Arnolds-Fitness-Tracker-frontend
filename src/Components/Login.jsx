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
            <>
            <h1>Log In</h1>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Input label="Name/Username" placeholder='Enter Account Name' name='name' onChange={this.handleChange} value={this.state.name}/>
                <Form.Input  label="Password" placeholder='Password' type='password' name='password'onChange={this.handleChange} value={this.state.password}/>
                </Form.Group>
                <Button type='submit'>Sign In</Button>

            </Form>
            </>
        )
    }
}
