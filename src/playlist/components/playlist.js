import React, {Component} from 'react';
// import Media from './media'
import Media from '../container/media'
import './playlist.css'

//Functional Component = Ahorra mas codigo

function Playlist(props){
  return(
    <div>
      <div className="Playlist">
        {
          props.playlist.map((item)=>{
            return(
              <Media
                openModal={props.handleOpenModalClick}
                id={item}
                key={item}
              />
            )
          })
        }
      </div>
    </div>
  )
}

//Component

// class Playlist extends Component{
//   render(){
//     const playlist = this.props.data.categories[0].playlist
//     const otros = this.props.data.categories[1].playlist
//     return(
//       <div className="Playlist">
//         {
//           playlist.map((item)=>{
//             return <Media {...item} key={item.id} />
//           })
//         }
//       </div>,
//       <div className="Otros">
//         {
//           otros.map((item)=>{
//             return <Media {...item} key={item.id} />
//           })
//         }
//       </div>
//     )
//   }
// }

export default Playlist;
