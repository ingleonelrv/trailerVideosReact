import React, {Component} from 'react'
import Search from '../components/search'

class SearchContainer extends Component{
    state={
        value:'Luis Fonsi'
    }
    //los eventos mejor manejarlos con arrow function por la cuestion de bindear los contextos
    handleSubmit = (event) =>{
        event.preventDefault(); //para que no recargue la pagina
        console.log(this.input.value, ' submit')
    }
    setInputRef = element =>{
        this.input = element
    }
    handleInputChange = event =>{
        this.setState({
            // value: this.input.value
            value: event.target.value.replace(' ','-')
        })
    }
    render(){
        return(
            <Search 
                setRef={this.setInputRef} 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value} />
        )
    }
}
export default SearchContainer