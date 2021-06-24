import React, { Component } from 'react'
// import { Form, Button } from 'semantic-ui-react'


export default class Login extends Component {
    state={
        name: '',
        password: ''
    }

    handleSubmit = (evt)=>{
        evt.preventDefault()
        console.log("this was pressed")
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
            <>
            <h1>Log In Form</h1>
            <form onSubmit={this.handleSubmit}>

                <label>Name</label>
                <input placeholder='Enter Account Name' name='name' onChange={this.handleChange} value={this.state.name}/>

                <label>Password</label>
                <input placeholder='...' type='password' name='password'onChange={this.handleChange} value={this.state.password}/>

                <button type='submit'>Submit</button>
            </form>
            </>
        )
    }
}