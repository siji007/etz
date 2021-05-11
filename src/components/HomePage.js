import React,{Fragment} from 'react'
import { Link } from 'react-router-dom'
import '../HomePage.css'
const HomePage =() =>{

    return(
        <Fragment>
            
            
            <div id="introDiv" className="container-fluid py-4 mt-16" id="guideDiv">
                <h1 className="mt-5" id="guideHeader">Developers Guide</h1>
                <p id="guideIntroText" className="text-center text-2xl mt-3">Get the available resources on API documentation for Etranzact applications </p>
                <button id="getStartedBtn" className="d-block mr-auto ml-auto btn-outline-success mt-4"><Link style={{textDecoration:'none'}} to="/gettingStarted">Get Started</Link></button>
            </div>

            <div>
                <h1 id="expectText" className="text-center mt-4 py-4">What to expect?</h1>
                <div className="flex justify-around align-center flex-wrap mt-8">
                    <div className="expectDiv1 mb-8">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="../img/laptop.jpg" alt="Sunset in the mountains"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Easy flow</div>
                                <p class="text-gray-700 text-base">
                                Create a easy access to get probems solved
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="expectDiv2 mb-8">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="../img/laptop1.jpg" alt="Sunset in the mountains"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Time</div>
                                <p class="text-gray-700 text-base">
                                Saves time. 
                                </p>
                            </div>
                            
                        </div>
                    </div>

                    <div className="expectDiv3">
                        <div class="max-w-sm rounded overflow-hidden shadow-lg">
                            <img class="w-full" src="../img/laptop2.jpg" alt="Sunset in the mountains"/>
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">Productivity</div>
                                <p class="text-gray-700 text-base text-lg">
                                Brings increase in productivity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <h1 className="text-center mt-8 text-lg py-8">&copy;Copyright 2021</h1>
            </div>
        </Fragment>
    )
}
export default HomePage;