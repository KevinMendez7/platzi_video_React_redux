import React, {Component} from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component{
  state = {
    modalVisible : false,
  }
  handleOpenModalClick = (media) =>{
    this.setState({
      modalVisible : true,
      media
    })
  }
  handleCloseModalCLick = (event) =>{
    this.setState({
      modalVisible : false,
    })
  }
  render(){
    return(
      <HandleError>
        <HomeLayout>
          <Related />
          <Categories
            categories={this.props.data.categories}
            handleOpenModalClick={this.handleOpenModalClick}
          />
          {
            this.state.modalVisible &&
          <ModalContainer>
            <Modal handleCLick={this.handleCloseModalCLick}>
              <VideoPlayer
                autoplay
                src={this.state.media.src}
                title={this.state.media.title}
              />
            </Modal>
          </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home
