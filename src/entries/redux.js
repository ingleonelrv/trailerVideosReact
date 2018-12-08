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
    store.dispatch({
        //el key type siempre debe ir y la accion(que sea) escrita asi de preferencia
        type: 'ADD_SONG',
        payload: {
            //title: title
            title
        }
    })
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

//la funcion pura reducer recibe un estado y return un estado. La action viene del dispatch
const reducer = function (state,action){
    switch (action.type) {
        case 'ADD_SONG':
            //...state a mi lista le agrego un nuevo objeto { } que esta en el store.dispatch
            return [...state, action.payload]
            break;   
        default:
            return state;
    }
}
const store = createStore(
    reducer,
    initialState, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function render(){
    const $container = document.getElementById('playlist')
    $container.innerHTML = "";
    //lista de elementos
    const playlist = store.getState()
    playlist.forEach(item => {
        const template = document.createElement('p')
        template.textContent = item.title
        $container.appendChild(template)    
    });
}
render()
function handleChange(){
    render()
}

store.subscribe(handleChange);

//TEMPLATE LITERAL
// function render() {
//     const playlist = store.getState();
//     const template = `
//       <ul>
//         ${playlist.map(song => `
//           <li>${song.title}</li>
//         `
//       )}
//       </ul>
//     `;
//     $container.innerHTML = template
//   }
//   render();
  
//   store.subscribe(render);
