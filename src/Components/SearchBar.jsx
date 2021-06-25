import React, { Component } from 'react'

export default class SearchBar extends Component {
    


 filterHandler = (e) => {
   this.props.updateFilterState(e.target.value)
 }


        
    render() {
      
      
        return (
                      
           <div class="ui fluid category search">
             <div class="ui icon input">
               <input class="prompt" type="text" placeholder="Workouts by Name..." type="text" className="searchTerm" onChange={this.filterHandler} value={this.props.filter} />
               <i class="search icon"></i>
             </div>
             <div class="results"></div>
            </div>

       )
    }
}
