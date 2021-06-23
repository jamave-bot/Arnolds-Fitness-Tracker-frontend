import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class SearchBar extends Component {

    handleChange=(e)=>{
        this.props.setSearchTerm(e.target.value)
    }

    render() {
        return (
            <div>
                <Input icon='search' onChange={this.handleChange} value={this.props.value} placeholder="Search Workout..." />
            </div>
        )
    }
}
