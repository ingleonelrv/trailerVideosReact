import React, {Component} from 'react'
import HomeLayout from '../component/home-layout'
import Categories from '../../categories/components/categories';
import Related from '../component/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'
import {connect} from 'react-redux'

class Home extends Component{
    state={
        modalVisible: false,
    }
    handleOpenModal = (media)=>{
        this.setState({
            modalVisible : true,
            media
        })
    }
    handleCloseModal = () =>{
        this.setState({
            modalVisible : false
        })
    }
    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <Categories search={this.props.search} categories={this.props.categories} handleOpenModal={this.handleOpenModal} />
                    {
                        // Operador ternario: if true mostrar sino entonces no render(ocultar), para else ? (&&) y : al final
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer autoPlay={true} src={this.state.media.src} title={this.state.media.title} />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}
function mapsStateToProps(state, props){
    const categories = state.data.categories.map((catId)=>{ //categories es un array con el id de las categorias
        return state.data.entities.categories[catId] // retorna un objeto de lo que tiene categories, es decir un array de id de media
    })
    //el estado en este caso es initialState, props es cualquier prop adicional
    return {
        categories: categories,
        search: state.search
    }
}
export default connect(mapsStateToProps)(Home)