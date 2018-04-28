import React, {Component} from 'react'
import Search from '../components/search'

class SearchContainer extends Component{
  handleSubmit = (event) =>{
    event.preventDefault();
    alert(this.input.value +'submit')
  }
  setInputRef = element =>{
    this.input = element;
  }
  render(){
    return(
      <Search
        setRef={this.setInputRef}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchContainer
