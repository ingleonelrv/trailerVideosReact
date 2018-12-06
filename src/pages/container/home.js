import React, {Component} from 'react'
import HomeLayout from '../component/home-layout'
import Categories from '../../categories/components/categories';
import Related from '../component/related'
import ModalContainer from '../../widgets/containers/modal-container'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handle-error'
import VideoPlayer from '../../player/containers/video-player'

class Home extends Component{
    state={
        modalVisible: false,
    }
    handleOpenModal = (event)=>{
        this.setState({
            modalVisible : true
        })
    }
    handleCloseModal = (event) =>{
        this.setState({
            modalVisible : false
        })
    }
    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related />
                    <VideoPlayer />
                    <Categories categories={this.props.data.categories} handleOpenModal={this.handleOpenModal} />
                    {
                        // Operador ternario: if true mostrar sino entonces no render(ocultar), para else ? (&&) y : al final
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <h1>Esto es un modal</h1>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}
export default Home