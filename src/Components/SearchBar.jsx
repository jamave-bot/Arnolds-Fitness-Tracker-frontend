import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

export default class SearchBar extends Component {
    


 filterHandler = (e) => {
    // console.log("Search Bar: ", e.target.value)
    this.props.updateFilterState(e.target.value)
 }


        
    render() {
      
      
        return (
            <div class="ui fluid category search">
             <div class="ui icon input">
               <input class="prompt" type="text" placeholder="Workouts by Name..." className="searchTerm" onChange={this.filterHandler} value={this.props.filter} />
               <i class="search icon"></i>
             </div>
             <div class="results"></div>
             <br></br>
            <Checkbox label="Recents first" onChange={this.props.orderWorkouts}/>
            </div>
        )
    }
}