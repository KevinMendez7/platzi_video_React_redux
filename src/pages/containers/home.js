import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import {connect} from 'react-redux'
import {List as list} from 'immutable'
import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'

class Home extends Component{
  // state = {
  //   modalVisible : false,
  // }
  handleOpenModalClick = (id) =>{
    // this.setState({
    //   modalVisible : true,
    //   media
    // })
    this.props.actions.openModal(id)
  }
  handleCloseModalCLick = (event) =>{
    // this.setState({
    //   modalVisible : false,
    // })
    this.props.actions.closeModal()
  }
  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.categories}
            search={this.props.search}
            handleOpenModalClick={this.handleOpenModalClick}
          />
          {
            this.props.modal.get("visible") &&
          <ModalContainer>
            <Modal handleCLick={this.handleCloseModalCLick}>
              <VideoPlayer
                autoplay
                id={this.props.modal.get('mediaId')}
                // src={this.state.media.src}
                // title={this.state.media.title}
              />
            </Modal>
          </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

function mapStateToProps(state, props){
  const categories = state.get('data').get('categories').map((categoryId) =>{
    return state.get('data').get('entities').get('category').get(categoryId)
  })
  let searchResult = list()
  const search = state.get('data').get('search')
  if(search){
    const mediaList = state.get('data').get('entities').get('media')
    searchResult = mediaList.filter((item) =>{
      return item.get('author').toLowerCase().includes(search.toLowerCase())
    }).toList()
  }
  return{
    categories: categories,
    search: searchResult,
    modal: state.get('modal')
  }
}

function mapDispatchToProps(dispatch){
  return{
    actions: bindActionCreators(actions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)
