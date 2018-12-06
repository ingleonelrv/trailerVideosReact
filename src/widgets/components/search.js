import React from 'react'
import './search.css'

function Search(props){
    return(
        <form className='Search'>
            <input className='Search-input' type='text' placeholder='Busca tu video favorito'></input>
        </form>
    )
}
export default Search