import React, {Component} from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends Component{
    //ES6
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author: props.author
    //     }
    // }

    //ES7 arrow function no hay necesidad de bind(this)
    // state={
    //     author: this.props.author 
    // }
    // este handle lo voy  a manejar como propiedad
    handleClick=(event)=>{
        //LE ESTOY ENVIANDO A MI MANEJADOR EL MEDIA
        this.props.openModal(this.props.id)
    }
    render(){
        // const styles = { //objeto json
        //     container:{ //key
        //         color: '#44546b',
        //         cursor: 'pointer',
        //         width: 245,
        //         border: '1px solid red'
        //     }
        // }
        return(
            //AQUI va el codigo JSX que no es mas que html
            //Ahora manejare el handleClick local
            <div className='Media' onClick={this.handleClick}>
                <div className='Media-cover'>
                    <img className='Media-image' src={this.props.cover} alt='' width={260} height={160} />
                    <h3 className='Media-title'>{this.props.title}</h3>
                    <p className='Media-author'>{this.props.author}</p>
                </div>                
            </div>
        )
    }
}
// Media.defaultProps = {}
Media.propTypes = { //en minuscula porque es un atributo de Component
    //Aqui validamos que el tipo sea el esperado, si llega otro tipo saltara un Warning
    cover : PropTypes.string,
    title : PropTypes.string.isRequired, //Para que sea obligatorio que venga
    author : PropTypes.string,
    type: PropTypes.oneOf(['video','audio']) //da warning si recibe otra cosa
}
export default Media