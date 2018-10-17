import React from 'react';
import Category from './category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search-container'
import Media from '../../playlist/components/media'
// import {fromJS} from 'immutable'

function Categories(props){

    return(
      <div className="Categories">
        <SearchContainer />
        {
          props.search.map((item) =>{
            return <Media
              openModal={props.handleOpenModalClick}
              title = {item.get('title')}
              author = {item.get('author')}
              type = {item.get('type')}
              cover = {item.get('cover')}
              src = {item.get('src')}
              id = {item.get('id')}
              key = {item.get('id')}
              />
          })
        }
        {
          props.categories.map((item) =>{
              return(
                <Category
                  handleOpenModalClick={props.handleOpenModalClick}
                  key={item.get('id')}
                  {...item.toJS()}
                />
              )
          })
        }
      </div>
    )

}

export default Categories;
