import {createStore} from 'redux'

const $form = document.getElementById('form');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    //previene que el navegador recargue
    event.preventDefault();
    //es una clase de form para obtener sus datos
    const data = new FormData($form)
    //obtiene los datos del elemento del form con name='title'
	const title = data.get('title')
	console.log(title)
}
//initialState puede ser cualquier tipo de coleccion: array,api, objeto, mapa, etc
const initialState = [
    {
        "title": "Despacito"
    },
    {
        "title":"One more time"
    },
    {
        "title":"Echame la culpa"
    }
]
const store = createStore(
    //la funcion pura reducer recibe un estado y return un estado
    (state) => state,
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const $container = document.getElementById('playlist')
//lista de elementos
const playlist = store.getState()
playlist.forEach(item => {
    const template = document.createElement('p')
    template.textContent = item.title
    $container.appendChild(template)    
});
