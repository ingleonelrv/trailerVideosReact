import React, {Component} from 'react'
import './media.css'
import PropTypes from 'prop-types'

class Media extends Component{
    //ES6
    // constructor(props){
    //     super(props)
    //     this.handleClick = this.handleClick.bind(this)
    // }

    //ES7 arrow function no hay necesidad de bind(this)
    handleClick=(event)=>{
        console.log(this.props.title)
    }
    render(){
        const styles = { //objeto json
            container:{ //key
                color: '#44546b',
                cursor: 'pointer',
                width: 245,
                border: '1px solid red'
            }
        }
        let { title, author, image } = this.props;
        return(
            //AQUI va el codigo JSX que no es mas que html
            <div className='Media' onClick={this.handleClick}>
                <div className='Media-cover'>
                    <img className='Media-image' src={image} alt='' width={260} height={160} />
                    <h3 className='Media-title'>{title}</h3>
                    <p className='Media-author'>{author}</p>
                </div>                
            </div>
        )
    }
}
Media.propTypes = { //en minuscula porque es un atributo de Component
    //Aqui validamos que el tipo sea el esperado, si llega otro tipo saltara un Warning
    image : PropTypes.string,
    title : PropTypes.string.isRequired, //Para que sea obligatorio que venga
    author : PropTypes.string,
    type: PropTypes.oneOf(['video','audio']) //da warning si recibe otra cosa
}
export default Media