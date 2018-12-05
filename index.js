import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/media' //Importo el componente

const container = document.getElementById('container')
render(<Media type = 'video' title = 'Que es responsive design?' author='Leonel Rodriguez' image='./images/covers/responsive.jpg' />, container); // Lo muestro en el navegador como un tag