import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../HomePage.css'
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
        </Fragment>
    )
}
export default NavBar;