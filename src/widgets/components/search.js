import React from 'react';
import './search.css'

const Search = (props) =>(
  <form className="Search" action=""  onSubmit={props.handleSubmit}>
    <input className="Search-input" type="text" placeholder="Buscar tu video favorito" name="search" ref={props.setRef} />
  </form>
)

export default Search
