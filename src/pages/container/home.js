import React, {Component} from 'react'
import HomeLayout from '../component/home-layout'
import Categories from '../../categories/components/categories';
import Related from '../component/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import {connect} from 'react-redux'
import {List as list} from 'immutable'
import * as actions from '../../actions/index'
import {bindActionCreators} from 'redux'

class Home extends Component{
    // state={
    //     modalVisible: false,
    // }
    handleOpenModal = (id)=>{
        this.props.actions.openModal(id)
        // this.setState({
        //     modalVisible : true,
        //     media
        // })
    }
    handleCloseModal = () =>{
        // this.setState({
        //     modalVisible : false
        // })
        this.props.actions.closeModal()
    }
    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories 
                        search={this.props.search} 
                        categories={this.props.categories} 
                        handleOpenModal={this.handleOpenModal}
                        loading={this.props.loading} />
                    {
                        // Operador ternario: if true mostrar sino entonces no render(ocultar), para else ? (&&) y : al final
                        //console.log(this.props.modal)
                        this.props.modal.get('visibility') &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer autoPlay={true} 
                                    //src={this.state.media.src} 
                                    //title={this.state.media.title}
                                    id={this.props.modal.get('mediaId')} />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}
function mapsStateToProps(state, props){
    const categories = state.get('data').get('categories').map((catId)=>{ //categories es un array con el id de las categorias
        return state.get('data').get('entities').get('categories').get(catId) // retorna un objeto de lo que tiene categories, es decir un array de id de media
    })
    
    //en la logica anterior el resultado era un array pero en immutable los objetos son mapas y los array son listas
    //list() es un metodo importado de immutable para crear listas
    let searchResults = list()
    //search seria mi query, lo que quiero buscar
    const search = state.get('data').get('search')
    //si me mandan a buscar algo
    if(search){
        //obtengo todos mis media en una lista
        const mediaList = state.get('data').get('entities').get('media')
        //iterio mediaList para filtrar mi busqueda
        searchResults = mediaList.filter((item)=>{
            //al usar filter devuelve true o false, si es true devuelve el elemento
            //debo tener cuidado siempre return algo, sino se rompe
            //includes() compara mi busqueda
            return item.get('author').toLowerCase().includes(search.toLowerCase());
            //esto me devolveria un nuevo mapa, pero para iterar y ponder dentro del DOM me conviene mejor una lista
            //asi que convierto con un metodo de immutable
        }).toList()
    }
    //el estado en este caso es initialState, props es cualquier prop adicional
    return {
        categories: categories,
        search: searchResults,
        modal: state.get('modal'),
        loading: state.get('loading').get('active')
    }
}
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actions,dispatch)
    }
}
export default connect(mapsStateToProps,mapDispatchToProps)(Home)
