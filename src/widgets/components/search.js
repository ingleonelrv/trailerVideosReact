import React from 'react'
import './search.css'

function Search(props){
    return(
        <form className='Search' onSubmit={props.handleSubmit}>
            <input 
                ref={props.setRef} 
                className='Search-input' 
                type='text' 
                placeholder='Busca tu video favorito'
                value={props.value}
                onChange={props.handleChange}                
                ></input>
        </form>
    )
}
export default Search