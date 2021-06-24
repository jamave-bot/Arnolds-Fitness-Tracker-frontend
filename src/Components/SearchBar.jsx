import React, { Component } from 'react'

export default class SearchBar extends Component {
    


 filterHandler = (e) => {
   this.props.updateFilterState(e.target.value)
 }


        
    render() {
      
      
        return (
            <div>
              <h4>Search by Workout Name</h4>
              <input type="text" className="searchTerm" onChange={this.filterHandler} value={this.props.filter} />
            </div>
        )
    }
}