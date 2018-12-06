import React, {Component} from 'react'
import HomeLayout from '../component/home-layout'
import Categories from '../../categories/components/categories';

class Home extends Component{
    render(){
        return(
            <HomeLayout>
                <Categories categories={this.props.data.categories} />
            </HomeLayout>
        )
    }
}
export default Home