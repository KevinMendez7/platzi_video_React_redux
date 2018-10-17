import React, {Component} from 'react'
import Search from '../components/search'
import {connect} from 'react-redux'
import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'

class SearchContainer extends Component{
  handleSubmit = (event) =>{
    event.preventDefault();
    this.props.actions.searchAsyncVideo(this.input.value)
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

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(null,mapDispatchToProps)(SearchContainer)
