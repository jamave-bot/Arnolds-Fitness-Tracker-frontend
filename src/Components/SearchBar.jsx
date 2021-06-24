import React, { Component } from 'react'
import { Input } from 'semantic-ui-react'

export default class SearchBar extends Component {
<<<<<<< HEAD

    handleChange=(e)=>{
        this.props.setSearchTerm(e.target.value)
    }

=======
    


 filterHandler = (e) => {
   this.props.updateFilterState(e.target.value)
 }


        
>>>>>>> mo
    render() {
      
      
        return (
            <div>
<<<<<<< HEAD
                <Input icon='search' onChange={this.handleChange} value={this.props.value} placeholder="Search Workout..." />
=======
              <h4>Search by Workout Name</h4>
              <input type="text" className="searchTerm" onChange={this.filterHandler} value={this.props.filter} />
>>>>>>> mo
            </div>
        )
    }
}
