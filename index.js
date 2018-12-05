import React from 'react'
import {render} from 'react-dom'
import Playlist from './src/playlist/components/playlist' //Importo el componente
import data from './src/api.json' 

const container = document.getElementById('container')
render(<Playlist data={data} />, container); // Lo muestro en el navegador como un tag