import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import "../NavBar.css"
// import '../HomePage.css'
const NavBar = () =>{
    function clickham(){
        let hamburger = document.querySelector(".harmburger");
        let navLinks = document.querySelector(".nav-links");
        hamburger.addEventListener("click",()=>{
            navLinks.classList.toggle("open")
        })
    }

   
    return(
        <Fragment>
            <div id="navDiv" className="">
                <nav className="">
                    <div class="harmburger" onClick={clickham}>
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                    <ul class="nav-links text-lg">
                        <li className=""><a href="#">Api Reference</a></li>
                        <li><a href="#">Pay</a></li>
                        <li><a href="#">Test</a></li>               
                    </ul>
                </nav>
            </div>

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
export default NavBar;