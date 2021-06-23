import React, { Component } from 'react'

export default class Workout extends Component {






    render() {
        console.log(this.props.workout)
        return (
            <div>
                <div>{this.props.workout.body_part}</div>
                <div>{this.props.workout.created_at}</div>
                <button>Delete</button>
              
                
            </div>
        )
    }
}
