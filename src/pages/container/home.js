import React, {Component} from 'react'
import HomeLayout from '../component/home-layout'
import Categories from '../../categories/components/categories';
import Related from '../component/related'

class Home extends Component{
    render(){
        return(
            <HomeLayout>
                <Related />
                <Categories categories={this.props.data.categories} />
            </HomeLayout>
        )
    }
}
export default Home