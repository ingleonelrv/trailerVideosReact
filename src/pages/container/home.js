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
                    <Categories categories={this.props.categories} handleOpenModal={this.handleOpenModal} />
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
    //el estado en este caso es initialState, props es cualquier prop adicional
    return {
        categories: state.data.categories
    }
}
export default connect(mapsStateToProps)(Home)