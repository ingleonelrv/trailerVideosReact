import React, {Component} from 'react'
import Media from '../components/media';
import {connect} from 'react-redux'

class MediaContainer extends Component{
    render(){
        return(
            //donde haya los ... mejor enviar propiedad por propiedad toJS es malo para el rendimiento
            <Media {...this.props.data.toJS()} />
        )
    }
}
function mapStateToProps(state,props){
    return({
        //obtengo los medias pertenecientes al props.id recibida desde el componente Playlist
        data: state.get('data').get('entities').get('media').get(props.id)
    })
}
export default connect(mapStateToProps)(MediaContainer)