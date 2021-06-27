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
        showForm: false,
    }

    handleClick = ()=>{
        this.setState({
            showForm: !this.state.showForm
        })
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
            this.handleClick()
            alert("User successfully created! You can sign in now!")
            this.setState({               
                name: "",
                age: "",
                height:"",
                weight:"",
                bodyfat:"",
                password:"",
            })

        });

    }

    render() {
        return (
            <>
                <label>Not a member?</label>
                <br></br>
                <Button onClick={this.handleClick}>{this.state.showForm? "Nevermind": "Sign Up!"}</Button>  
                
                {this.state.showForm? 
                <Form onSubmit={this.handleSubmit} size='small'>
                    <Form.Group>
                    <Form.Input width={3} placeholder='Name/Username' onChange={this.handleChange} name="name" value={this.state.name} />
                    </Form.Group>

                    <Form.Group>
                    <Form.Input width={3} placeholder='Age' onChange={this.handleChange} name="age" value={this.state.age} />
                    </Form.Group>

                    <Form.Group>
                    <Form.Input width={3} placeholder='Height' onChange={this.handleChange} name="height" value={this.state.height} />
                    </Form.Group>

                    <Form.Group>
                    <Form.Input width={3} placeholder='Weight' onChange={this.handleChange} name="weight" value={this.state.weight} />
                    </Form.Group>

                   
                    <Form.Group>
                    <Form.Input width={3} placeholder="Body Fat Percentage" onChange={this.handleChange} name="bodyfat" value={this.state.bodyfat}/>
                    </Form.Group>

                    <Form.Group>
                    <Form.Input width={3} placeholder="Choose a Password" onChange={this.handleChange} name="password" value={this.state.password} type='password'/>
                    </Form.Group>

                    <Button type='submit' onClick={this.handleSubmit}>Create User!</Button>
                </Form>
                :
                null
                }
            </>
        )
    }


}