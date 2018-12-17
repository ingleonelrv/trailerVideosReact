import React, {Component} from 'react'
import Search from '../components/search'
import {connect} from 'react-redux'
import {searchEntities, searchAsyncEntities} from '../../actions/index'

class SearchContainer extends Component{
    state={
        value:'',
        prompt: false
    }
    //los eventos mejor manejarlos con arrow function por la cuestion de bindear los contextos
    handleSubmit = (event) =>{
        event.preventDefault(); //para que no recargue la pagina
        // console.log(this.input.value, ' submit')
        this.props.dispatch(searchAsyncEntities(this.input.value))
    }
    setInputRef = element =>{
        this.input = element
    }
    handleInputChange = event =>{
        this.setState({
            // value: this.input.value
            value: event.target.value.replace(' ','-'),
            prompt: !!(event.target.value)
        })
    }
    render(){
        return(
            <Search
                prompt={this.state.prompt} 
                setRef={this.setInputRef} 
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value} />
        )
    }
}
export default connect()(SearchContainer)