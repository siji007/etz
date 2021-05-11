import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return(
        <Fragment>
            <input style={{display:'none'}} type="checkbox" id="check"/>
            <label id="labelSec" for="check">
                <i className="fas fa-bars" id="btn">P</i>
                <i className="fas fa-times" id="cancel">X</i>
            </label>
            

            <div className="sidebar pr-3">
                <header className="mt-12 text-center font-bold">Guides</header>
                <ul>
                <li><a href="">Cooperate Pay</a></li>
                <li className=""><a href="">PocketMoni</a></li>
                
                <li><a href="">Payoutlet</a></li>
                <li><a href=""></a></li>
                </ul>
            </div>
        </Fragment>
    )
}
export default Sidebar;