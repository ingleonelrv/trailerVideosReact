import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/media' //Importo el componente

const container = document.getElementById('container')
render(<Media />, container); // Lo muestro en el navegador como un tag