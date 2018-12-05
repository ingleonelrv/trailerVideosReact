import React, {Component} from 'react'
import './media.css'

class Media extends Component{
    render(){
        const styles = { //objeto json
            container:{ //key
                color: '#44546b',
                cursor: 'pointer',
                width: 245,
                border: '1px solid red'
            }
        }
        return(
            //AQUI va el codigo JSX que no es mas que html
            <div className='Media'>
                <div className='Media-cover'>
                    <img className='Media-image' src='./images/covers/bitcoin.jpg' alt='' width={260} height={160} />
                    <h3 className='Media-title'>Por que aprender React?</h3>
                    <p className='Media-author'>Leonel Rodriguez</p>
                </div>                
            </div>
        )
    }
}
export default Media