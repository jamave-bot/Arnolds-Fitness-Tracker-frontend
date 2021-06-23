import React, { Component } from 'react'
import { Search } from 'semantic-ui-react'

export default class SearchBar extends Component {

    handleChange=(e)=>{
        this.props.setSearchTerm(e.target.value)
    }

    render() {
        return (
            <div>
                <Search onSearchChange={this.handleChange} value={this.props.value}/>
            </div>
        )
    }
}
