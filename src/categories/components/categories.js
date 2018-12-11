import React from 'react'
import Category from './category'
import './categories.css'
import SearchContainer from '../../widgets/containers/search-container'
import Media from '../../playlist/components/media';

function Categories(props){
    return(
        <div className='categories'>
            <SearchContainer />
            {/* Entre mi formulario y mis categories muestro los resultados */}
            {
                props.search.map((item)=>{
                    //NO es recomendable usar toJS mejor enviar title={props.get(title)} src=...
                    //en todo caso lo que hace toJS es convertir un mapa en un objeto plano js
                    return <Media {...item.toJS()} key={item.get('id')} />
                })
            }
            {
                props.categories.map((item)=>{
                    return <Category key={item.get('id')} {...item.toJS()} handleOpenModal={props.handleOpenModal} />
                })
            }
        </div>
    )
}
export default Categories