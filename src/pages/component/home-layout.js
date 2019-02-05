import React from 'react'
import './home-layout.css'

function HomeLayout(props){
    return(
        <section className='homeLayout'>
            {props.children}
        </section>
    )
}
export default HomeLayout