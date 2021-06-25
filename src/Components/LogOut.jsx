import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

export default class LogOut extends Component {
    render() {
        return (
            <>
                <h1>Welcome, {this.props.user.name}</h1>
                <Button onClick={this.props.logOut}>Log Out</Button>
            </>
        )
    }
}
