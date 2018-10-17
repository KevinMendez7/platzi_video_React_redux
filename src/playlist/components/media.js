import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import "./media.css";

class Media extends PureComponent{
  //A partir de ecmascript 7 se pueden usar arrow functions
  //ya que estas heredan el contexto de su padre
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     author: "Kevin Test"
  //   }
  handleClick = event =>{
    this.props.openModal(this.props.id)
  }
  render(){
    return(
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-image"
            src={this.props.cover}
            alt=""
            width={260}
            height={160}
          />
        </div>
        <h3 className="Media-title">{this.props.title}</h3>
        <p className="Media-author">{this.props.author}</p>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['video','audio'])
}

export default Media;
