import React from 'react';
import {render} from 'react-dom';
import Home from '../pages/containers/home'
// import Playlist from './src/playlist/componentes/playlist';
import data from '../api.json'

// React.render("Que voy a renderizar, donde voy a ponerlo")

const homeContainer = document.getElementById('home-container');
// const holaMundo = <h1>hola mundo!!!!</h1>;

render(<Home data={data} />, homeContainer);
