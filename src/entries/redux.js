
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
